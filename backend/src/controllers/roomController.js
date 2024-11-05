import { CLOUDINARY_FOLDER_ROOMS } from '../constants/cloudinary_folders.js';
import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import { deleteImages, uploadImages } from '../utils/images.js';

const getAllRooms = catchAsync(async (req, res, next) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  let filter = {};
  // filter if getting all rooms of one hotel // nested get route
  if (req.params.hotelId) filter.hotel = req.params.hotelId;

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

const getAvailableRoomsOnHotel = catchAsync(async (req, res, next) => {
  // console.log(req.params);
  let filter = {};
  // filter if getting all rooms of one hotel // nested get route
  if (req.params.hotelId) filter.hotel = req.params.hotelId;

  const rooms = await Room.find(filter);

  return res.status(200).json({
    status: 'success',
    message: 'available rooms of a hotel',
    numOfRooms: rooms.length,
    data: { rooms },
  });
});

const getRoom = catchAsync(async (req, res, next) => {
  // find by id
  const room = await Room.findById(req.params.id).populate({
    path: 'bookings',
  });

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
  if (req.files) {
    imageUrls = await uploadImages(req.files, CLOUDINARY_FOLDER_ROOMS, next);
  }

  if (!imageUrls)
    return next(
      new AppError(
        'unable to upload images | please try again or check you connection',
        400
      )
    );

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
  const roomBeforeUpdate = await Room.findById(req.params.id);

  if (!roomBeforeUpdate) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // deleted images of rooms
  const deletedImageUrls = roomBeforeUpdate.images.filter(
    (url) => !req.body.images.includes(url)
  );

  // delete images
  await deleteImages(...deletedImageUrls);

  // find and update
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  // upload room images to cloudinary
  if (req.files?.length > 0) {
    let imageUrls;
    imageUrls = await uploadImages(req.files, CLOUDINARY_FOLDER_ROOMS, next);
    room.images = [...(room.images || []), ...imageUrls];
    await room.save({ validateBeforeSave: false });
  }

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
  // find by id
  const room = await Room.findById(req.params.id).populate({
    path: 'bookings',
  });

  if (!room) {
    return next(new AppError('There is no room found with that id', 404));
  }

  // delete all images of the room
  await deleteImages(...room.images);

  // delete all bookings of the room
  const bookingPromises = room.bookings?.map(
    async (booking) => await Booking.findByIdAndDelete(booking._id)
  );

  await Promise.all(bookingPromises);

  // find and delete
  await Room.findByIdAndDelete(req.params.id);

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
  getAvailableRoomsOnHotel,
};

export default roomController;
