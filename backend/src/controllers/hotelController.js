import { StatusCodes } from 'http-status-codes';

export const getAllHotels = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get all hotels',
  });
};

export const getHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Get a hotel',
  });
};

export const createHotel = async (req, res) => {
  res.status(StatusCodes.CREATED).json({
    status: 'success',
    message: 'Create a hotel',
  });
};

export const updateHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Update a hotel',
  });
};

export const deleteHotel = async (req, res) => {
  res.status(StatusCodes.OK).json({
    status: 'success',
    message: 'Delete a hotel',
  });
};
