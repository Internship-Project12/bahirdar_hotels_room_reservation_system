import Booking from '../models/bookingModel.js';
import Hotel from '../models/hotelModel.js';
import Review from '../models/reviewModel.js';
import User from '../models/userModel.js';
import Room from '../models/roomModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getCountDocs = catchAsync(async (req, res, next) => {
  // 1 number of hotels
  const numHotels = await Hotel.countDocuments();

  // 2 total number of users of the system
  const numUsers = await User.countDocuments();
  // 3 total number of bookings
  const numBookings = await Booking.countDocuments();
  // 4 total number of reviews
  const numReviews = await Review.countDocuments();
  // 5 total number of rooms
  const numRooms = await Room.countDocuments();

  return res.status(200).json({
    status: 'success',
    message: 'get admin stats',
    data: {
      numUsers,
      numHotels,
      numRooms,
      numBookings,
      numReviews,
    },
  });
});

export const getHotelStats = catchAsync(async (req, res, next) => {
  const { hotelId } = req.params;
  // 1 get all rooms
  const numRooms = await Room.countDocuments({ hotel: hotelId });
  // 2 get all bookings
  const numBookings = await Booking.countDocuments({ hotel: hotelId });
  // 3 get all users
  const users = await Booking.find({ hotel: hotelId }).distinct('user');
  const numUsers = users.length;

  // 4 get all reviews
  const numReviews = await Review.countDocuments({ hotel: hotelId });
  return res.status(200).json({
    status: 'success',
    message: 'get stats for one hotel',
    data: {
      numRooms,
      numBookings,
      numUsers,
      numReviews,
    },
  });
});
