import User from '../models/userModel.js';
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
  res.status(200).json({ message: 'Create user' });
};
export const getUser = async (req, res) => {
  res.status(200).json({ message: 'Get user' });
};

export const updateUser = async (req, res) => {
  res.status(200).json({ message: 'Update user' });
};

export const deleteUser = async (req, res) => {
  res.status(200).json({ message: 'Delete user' });
};
