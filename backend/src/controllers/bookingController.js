import Booking from '../models/bookingModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import catchAsync from '../utils/catchAsync.js';

const getAllBookings = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Booking.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const bookings = await features.query;

  res.status(200).json({
    status: 'success',
    message: 'get all bookings',
    numOfBookings: bookings.length,
    data: {
      bookings,
    },
  });
});

const getBooking = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get booking',
  });
});

const updateBooking = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'update bookings',
  });
});

const createBooking = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'create booking',
  });
});

const deleteBooking = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'delete booking',
  });
});

const bookingController = {
  getAllBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
};

export default bookingController;
