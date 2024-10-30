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
    checkInDate: {
      //TODO: add a custom validator to check if the day is >= Date.now()
      type: Date,
      required: [true, 'a booking must have check in date'],
    },
    checkOutDate: {
      type: Date,
      required: [true, 'a booking must have check out date'],
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

    // ****************************************************** //

    // we calculate this from the two dates
    numOfNights: {
      type: Number,
      min: [1, 'a book must be at least one night '],
    },

    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hotel',
    },

    // this will be calculated from the price per night of the room and the num of nights
    totalPrice: {
      type: Number,
    },

    // we get this prop from the room on the creation of a book
    pricePerNight: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// get the hotel from the room before save
bookingSchema.pre('save', async function (next) {
  const room = await Room.findById(this.room);
  if (!room) {
    next(new AppError('there is no room found with that id', 404));
  }
  this.hotel = room.hotel;
  next();
});

// calculate the number of nights from the checkOut and checkIn date
bookingSchema.pre('save', function (next) {
  const checkInDate = new Date(this.checkInDate);
  const checkOutDate = new Date(this.checkOutDate);

  // if check in date and check out date are the same, i.e. the number of nights that the guest will stay wil be one night only
  // otherwise if the user selects today and next day the difference will be one but we need to add one to make it 2 nights  or days
  const numOfNights =
    checkOutDate.getTime() === checkInDate.getTime()
      ? 1
      : Math.floor(
          (checkOutDate.getTime() - checkInDate.getTime()) /
            (24 * 60 * 60 * 1000) +
            1
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
    select: 'roomNumber roomType pricePerNight images',
  });

  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
