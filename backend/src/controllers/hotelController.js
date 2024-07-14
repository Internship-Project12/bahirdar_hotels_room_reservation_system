import { StatusCodes } from 'http-status-codes';
import Hotel from '../models/hotelModel.js';
import catchAsync from '../utils/catchAsync.js';
import APIFeatures from '../utils/apiFeatures.js';
import AppError from '../utils/appError.js';
import { uploadImages } from '../utils/uploadImages.js';
import {
  DEFAULT_HOTEL_IMAGE,
  DEFAULT_HOTEL_IMAGE_2,
} from '../constants/constants.js';

export const getAllHotels = catchAsync(async (req, res, next) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // HERE WE DESTRUCTURE POSSIBLE VALUES FROM THE QUERY
  const { search, hotelStar, sort } = req.query;

  // FILTERING
  const queryObj = {};

  if (search) {
    queryObj.$or = [
      { name: { $regex: search, $options: 'i' } },
      // { address: { $regex: search, $options: 'i' } },
    ];
  }

  if (hotelStar) {
    queryObj.starRating = hotelStar;
  }

  // SORTING
  // possible values for sorting in hotels is d/t from users or others eg. sort by hotel star, there are no hotel star on other tables so we need to modify the req.query to use it on apiFeatures
  // on the front-end there are sort by letter from a-z or z-a | sort on hotel name
  if (sort) {
    req.query.sort = (sort === 'a-z' && 'name') || (sort === 'z-a' && '-name');
    req.query.sort =
      (sort === 'newest' && '-createdAt') ||
      (sort === 'oldest' && 'createdAt') ||
      (sort === 'pricePerNight-desc' && '-pricePerNight') ||
      (sort === 'pricePerNight-asc' && 'pricePerNight') ||
      (sort === 'avgRating-desc' && '-avgRating') ||
      (sort === 'avgRating-asc' && 'avgRating');
  }

  const features = new APIFeatures(Hotel.find(), req.query)
    // FILTERING IS SPECIFIC TO THE DATA WE FILTER SO I DON'T USE IT HERE
    .sort()
    .limitFields()
    .paginate();

  const hotels = await features.query.find(queryObj);

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
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // console.log(req.files, req.body);

  let imageCoverUrl = DEFAULT_HOTEL_IMAGE;
  let hotelImagesUrl = [DEFAULT_HOTEL_IMAGE, DEFAULT_HOTEL_IMAGE_2];

  // if (req.files?.imageCoverFile || req.files?.hotelImagesFiles) {
  //   imageCoverUrl = await uploadImages(req.files.imageCoverFile, next);
  //   hotelImagesUrl = await uploadImages(req.files.hotelImagesFiles, next);
  // }

  const hotel = await Hotel.create({
    ...req.body,
    imageCover: imageCoverUrl[0],
    hotelImages: hotelImagesUrl,
  });
  // console.log(hotel);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'Create a hotel',
    data: { data: hotel },
  });
});

export const getHotel = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const { id } = req.params;

  const hotel = await Hotel.findById(id)
    .populate({
      path: 'rooms',
    })
    .populate({
      path: 'reviews',
    })
    .populate({
      path: 'manager',
      select: `firstName lastName email photo phoneNumber`,
    })
    .populate({
      path: 'bookings',
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
    imageCoverUrl = await uploadImages(req.files.imageCoverFile, next);
    hotel.imageCover = imageCoverUrl[0];
  }

  if (req.files.hotelImagesFiles) {
    hotelImagesUrl = await uploadImages(req.files.hotelImagesFiles, next);
    hotel.hotelImages = [...(hotel?.hotelImages || []), ...hotelImagesUrl];
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
