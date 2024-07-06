import catchAsync from '../utils/catchAsync.js';

const getAllRooms = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get all routes',
  });
});

const getRoom = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get one route',
  });
});

const createRoom = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'create one route',
  });
});

const updateRoom = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'update one route',
  });
});

const deleteRoom = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'delete one route',
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
