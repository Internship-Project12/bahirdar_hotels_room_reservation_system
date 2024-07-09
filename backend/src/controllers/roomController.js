import Room from '../models/roomModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import { uploadImages } from '../utils/uploadImages.js';

const getAllRooms = catchAsync(async (req, res, next) => {
  let filter = {};
  // filter if getting all rooms of one hotel // nested get route
  if (req.params.tourId) filter.hotel = req.params.hotelId;

  const features = new APIFeatures(Room.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

    // execute the query
  const rooms = await features.query;

  // send response
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
  // find by id
  const room = await Room.findById(req.params.id);

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // send response
  res.status(200).json({
    status: 'success',
    message: 'get room route',
    data: {
      room,
    },
  });
});

const createRoom = catchAsync(async (req, res, next) => {
  // if creating is on the nested route and we get the hotel id from the merge param
  if (!req.body.hotel) req.body.hotel = req.params.hotelId;

  // upload room images to cloudinary
  let imageUrls;
  if (req.files) imageUrls = uploadImages(req.files);

  // create room
  const room = await Room.create({ ...req.body, images: imageUrls });

  // send response
  res.status(200).json({
    status: 'success',
    message: 'create room route',
    data: {
      room,
    },
  });
});

const updateRoom = catchAsync(async (req, res, next) => {
  // find and update
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // upload room images to cloudinary
  let imageUrls;
  if (req.files) imageUrls = uploadImages(req.files);
  room.images = [...(room?.images || []), ...imageUrls];
  await room.save();

  // update hotel | price per night and number of rooms
  await room.constructor.calcMinPriceAndNumOfRooms(room.hotel);

  // send response
  res.status(200).json({
    status: 'success',
    message: 'update room route',
    data: {
      room,
    },
  });
});

const deleteRoom = catchAsync(async (req, res, next) => {
  // find and delete
  const room = await Room.findByIdAndDelete(req.params.id);

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // update hotel | price per night and number of rooms
  await room.constructor.calcMinPriceAndNumOfRooms(room.hotel);

  // send response
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
