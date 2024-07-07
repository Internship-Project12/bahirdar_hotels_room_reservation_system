import mongoose from 'mongoose';
import { BookingStatus } from '../constants/constants.js';

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
      required: [true, 'a book must have a price'],
      // min: [0, ''] // TODO: total price must greater than pricePerNight of the room
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

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
