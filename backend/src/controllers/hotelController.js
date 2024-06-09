import { StatusCodes } from 'http-status-codes';
import Hotel from '../models/hotelModel.js';

export const getAllHotels = async (req, res) => {
  const hotels = await Hotel.find({}); //{userId: req.userId}

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get all hotels',
    results: hotels.length,
    data: {
      data: hotels,
    },
  });
};

export const getHotel = async (req, res) => {
  const { id } = req.params;

  const hotel = await Hotel.findOne({
    _id: id,
    // userId: req.userId,
  });

  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get a hotel',
    data: { data: hotel },
  });
};

export const createHotel = async (req, res) => {
  const hotel = await Hotel.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'Create a hotel',
    data: { data: hotel },
  });
};

export const updateHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Update a hotel',
  });
};

export const deleteHotel = async (req, res) => {
  const { id } = req.params;
  const hotel = await Hotel.findByIdAndDelete(id);

  res.status(StatusCodes.DELETED).json({
    status: 'success',
    message: 'Delete a hotel',
  });
};
