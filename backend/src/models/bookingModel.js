import mongoose from 'mongoose';
import { BookingStatus } from '../constants/constants.js';
import AppError from '../utils/appError.js';
import Room from './roomModel.js';

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'a booking should have a user'],
    },
    room: {
      type: mongoose.Schema.ObjectId,
      ref: 'Room',
      required: [true, 'a booking should have a room to book'],
    },
    totalPrice: {
      type: Number,
    },
    pricePerNight: {
      type: Number,
    },
    checkInDate: {
      //TODO: add a custom validator to check if the day is >= Date.now()
      type: Date,
      required: [true, 'a booking must have check in date'],
      // validate: {
      //   validator: function (val) {
      //     const checkIn = new Date(val);
      //     console.log(checkIn.getTime(), Date.now());
      //     return checkIn.getTime() >= Date.now();
      //   },
      //   message: 'check in date must be now or in the future',
      // },
      // default: Date.now(),
    },
    checkOutDate: {
      type: Date,
      required: [true, 'a booking must have check out date'],
    },
    numOfNights: {
      type: Number,
      min: [1, 'a book must be at least one night '],
    },
    status: {
      type: String,
      enum: {
        values: [
          BookingStatus.PENDING,
          BookingStatus.CONFIRMED,
          BookingStatus.CANCELLED,
        ],
        message:
          'a booking type must either be pending, confirmed, or cancelled',
      },
      default: 'pending',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// calculate the number of nights from the checkOut and checkIn date
bookingSchema.pre('save', function (next) {
  const checkInDate = new Date(this.checkInDate);
  const checkOutDate = new Date(this.checkOutDate);

  const numOfNights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (24 * 60 * 60 * 1000)
  );

  if (numOfNights < 1) {
    next(new AppError('number of nights must be at least one night', 401));
  }

  this.numOfNights = numOfNights;

  next();
});

// CALCULATE THE TOTAL PRICE BEFORE SAVE
bookingSchema.pre('save', async function (next) {
  const room = await Room.findById(this.room);
  if (!room) {
    next(new AppError('there is no room found with that id', 404));
  }
  this.pricePerNight = room.pricePerNight;
  this.totalPrice = room.pricePerNight * this.numOfNights;
  next();
});

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: '-createdAt -updatedAt -__v -passwordChangedAt',
  }).populate({
    path: 'room',
    select: 'roomNumber roomType pricePerNight',
  });

  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
