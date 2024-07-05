import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(200).json({
    status: 'success',
    message: 'Create user',
    data: {
      user,
    },
  });
};

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);
  if (!user) return next(new AppError('No user found with that ID', 404));

  res.status(200).json({
    status: 'success',
    message: 'Get user',
    data: {
      user,
    },
  });
});

export const getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

export const updateUser = async (req, res) => {
  res.status(200).json({ message: 'Update user' });
};

export const deleteUser = async (req, res) => {
  res.status(200).json({ message: 'Delete user' });
};
