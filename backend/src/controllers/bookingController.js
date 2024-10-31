import { DEFAULT_ROOM_IMAGE } from '../constants/constants.js';
import axios from 'axios';
import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

const verifyPaymentChapa = catchAsync(async (req, res, next) => {
  const { tx_ref, roomId, checkInDate, checkOutDate } = req.body;
  const user = req.user.id;

  console.log(user, roomId, tx_ref, checkInDate, checkOutDate);

  if (!tx_ref) {
    return next(new AppError('tx_ref is not provided', 400));
  }

  try {
    const response = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const booking = await Booking.create({
      user,
      room: roomId,
      checkInDate,
      checkOutDate,
      status: 'confirmed',
    });

    const verifiedData = response.data.data;

    console.log(booking);
    console.log(verifiedData);

    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    return next(
      new AppError('There is an error with chapa payment gateway', 500)
    );
  }
});

const acceptPaymentChapa = catchAsync(async (req, res, next) => {
  const { roomId } = req.params;
  const room = await Room.findById(roomId).populate({
    path: 'hotel',
    select: 'name address imageCover address summary',
  });

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  const { checkInDate, checkOutDate } = req.body;

  if (!checkInDate || !checkOutDate) {
    return next(new AppError('Check in and check out dates are required', 400));
  }

  const {
    roomNumber,
    roomType,
    pricePerNight,
    capacity,
    description,
    images,
    hotel,
  } = room;
  const { firstName, lastName, email, phoneNumber } = req.user;

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  const numOfNights = Math.floor(
    (checkOut.getTime() - checkIn.getTime()) / (24 * 60 * 60 * 1000) + 1
  );

  if (numOfNights < 1) {
    return next(
      new AppError('number of nights must be at least one night', 401)
    );
  }

  const totalPrice = pricePerNight * numOfNights;

  const tx_ref = `${firstName}-${lastName}` + Date.now();

  const return_url = `http://localhost:5173/payment-successful/${roomId}?tx_ref=${tx_ref}&checkIn=${checkIn.getTime()}&checkOut=${checkOut.getTime()}`;

  // console.log(return_url);

  const body = {
    amount: totalPrice,
    currency: 'ETB',
    email,
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    tx_ref,
    return_url,
  };

  try {
    const chapaRes = await axios.post(
      'https://api.chapa.co/v1/transaction/initialize',
      JSON.stringify(body),
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = {
      checkInDate,
      checkOutDate,
      numOfNights,
      totalPrice,
      chapa: chapaRes.data,
      room: {
        roomNumber,
        roomType,
        pricePerNight,
        capacity,
        description,
        images,
      },
      hotel,
    };

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return next(
      new AppError('There is an error with chapa payment gateway', 500)
    );
  }
});

const getAllBookings = catchAsync(async (req, res, next) => {
  const { status, hotel, user } = req.query;

  let filter = {};
  // this case will happen on nested route of get all bookings on one room
  if (req.params.roomId) {
    filter.room = req.params.roomId;
  }

  if (req.query.user) {
    filter.user = req.query.user;
  }

  // FILTERING
  const queryObj = {};
  if (status) {
    queryObj.status = status;
  }

  // get all bookings of one hotel
  if (hotel) {
    queryObj.hotel = hotel;
  }

  const features = new APIFeatures(Booking.find(filter), req.query)
    // .filter()
    .sort()
    .limitFields()
    .paginate();

  const bookings = await features.query.find(queryObj).populate({
    path: 'hotel',
    select: 'name imageCover',
  });

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
  if (req.params.roomId) {
    req.body.room = req.params.roomId;
  }

  if (!req.body.user) req.body.user = req.user._id;

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
  acceptPaymentChapa,
  verifyPaymentChapa,
};

export default bookingController;
