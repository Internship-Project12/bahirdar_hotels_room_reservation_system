import Booking from '../models/bookingModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
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
  const { id } = req.params;

  const booking = await Booking.findById(id);

  if (!booking) {
    return next(new AppError('there is no booking found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'get booking',
    data: {
      booking,
    },
  });
});

const updateBooking = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const booking = await Booking.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!booking) {
    return next(new AppError('there is no booking found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'update bookings',
    data: {
      booking,
    },
  });
});

const createBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.create(req.body);

  res.status(200).json({
    status: 'success',
    message: 'create booking',
    data: {
      booking,
    },
  });
});

const deleteBooking = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const booking = await Booking.findByIdAndDelete(id);

  if (!booking) {
    return next(new AppError('there is no booking found with that id', 404));
  }

  res.status(204).json({
    status: 'success',
    message: 'delete booking',
    data: null,
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
