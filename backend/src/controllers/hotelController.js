import { StatusCodes } from 'http-status-codes';
import Hotel from '../models/hotelModel.js';
import catchAsync from '../utils/catchAsync.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import { uploadImages } from '../middlewares/multerMiddleware.js';

export const getAllHotels = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const features = new APIFeatures(Hotel.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const hotels = await features.query;

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get all hotels',
    results: hotels.length,
    data: {
      data: hotels,
    },
  });
});

export const createHotel = catchAsync(async (req, res, next) => {
  console.log(req.files, req.body);
  let imageCoverUrl;
  let hotelImagesUrl;

  try {
    imageCoverUrl = await uploadImages(req.files.imageCoverFile);
    hotelImagesUrl = await uploadImages(req.files.hotelImagesFiles);
  } catch (error) {
    console.error('🔥', error);
    return next(new AppError('Unable to upload images, try again', 500));
  }

  const hotel = await Hotel.create({
    ...req.body,
    imageCover: imageCoverUrl[0],
    hotelImages: hotelImagesUrl,
  });
  console.log(hotel);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'Create a hotel',
    data: { data: hotel },
  });
});

export const getHotel = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { id } = req.params;

  const hotel = await Hotel.findOne({
    _id: id,
    // userId: req.userId,
  });

  if (!hotel) {
    return next(new AppError('No hotel found with that ID', 404));
  }

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get a hotel',
    data: { data: hotel },
  });
});

export const updateHotel = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log(req.files, req.body.hotelImages.length);

  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!hotel) {
    return next(new AppError('No hotel found with that ID', 404));
  }

  // IF THERE ARE IMAGE TO UPDATE
  let imageCoverUrl;
  let hotelImagesUrl;

  if (req.files.imageCoverFile) {
    imageCoverUrl = await uploadImages(req.files.imageCoverFile);
    hotel.imageCover = imageCoverUrl[0];
  }

  if (req.files.hotelImagesFiles) {
    hotelImagesUrl = await uploadImages(req.files.hotelImagesFiles);
    hotel.hotelImages = [...hotel?.hotelImages, ...hotelImagesUrl];
  }

  await hotel.save();

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get a hotel',
    data: {
      data: hotel,
    },
  });
});

export const deleteHotel = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { id } = req.params;
  const hotel = await Hotel.findByIdAndDelete(id);

  if (!hotel) {
    return next(new AppError('No hotel found with that ID', 404));
  }

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'hotel deleted successfully ',
  });
});
