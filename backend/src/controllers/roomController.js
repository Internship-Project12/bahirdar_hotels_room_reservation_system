import Room from '../models/roomModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

const getAllRooms = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) filter.hotel = req.params.hotelId;

  const features = new APIFeatures(Room.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const rooms = await features.query;

  res.status(200).json({
    status: 'success',
    message: 'get all routes',
    numOfRooms: rooms.length,
    data: {
      rooms,
    },
  });
});

const getRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'get room route',
    data: {
      room,
    },
  });
});

const createRoom = catchAsync(async (req, res, next) => {
  if (!req.body.hotel) req.body.hotel = req.params.hotelId;

  const room = await Room.create(req.body);

  res.status(200).json({
    status: 'success',
    message: 'create room route',
    data: {
      room,
    },
  });
});

const updateRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // update hotel | price per night and number of rooms
  await room.constructor.calcMinPriceAndNumOfRooms(room.hotel);

  res.status(200).json({
    status: 'success',
    message: 'update room route',
    data: {
      room,
    },
  });
});

const deleteRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findByIdAndDelete(req.params.id);

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // update hotel | price per night and number of rooms
  await room.constructor.calcMinPriceAndNumOfRooms(room.hotel);

  res.status(204).json({
    status: 'success',
    message: 'delete room route',
    data: null,
  });
});

const roomController = {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
};

export default roomController;
