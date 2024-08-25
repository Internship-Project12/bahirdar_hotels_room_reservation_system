import { DEFAULT_USER_AVATAR } from '../constants/constants.js';
import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import filterObject from '../utils/filterObject.js';
import { deleteImages, uploadImages } from '../utils/images.js';

export const getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

export const updateMe = catchAsync(async (req, res, next) => {
  // make sure the user does not update his password through this route
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword route.',
        400
      )
    );
  }

  // filter the body to prevent the user from updating his role or like that...
  const filteredBody = filterObject(
    req.body,
    'firstName',
    'lastName',
    'email',
    'phoneNumber'
  );

  // update user
  const user = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  if (!user) return next(new AppError('No user found with that ID', 404));

  // upload images if the user updates his avatar
  let photo;
  if (req.file) {
    // TODO:
    // upload images fns accepts an array of files and return an array of image urls
    photo = await uploadImages([req.file], CLOUDINARY_FOLDER_USERS, next);

    if (user.photo !== DEFAULT_USER_AVATAR) {
      await deleteImages(user.photo);
    }
  }

  user.photo = photo[0];
  await user.save({ validateBeforeSave: false });

  // return response
  res.status(200).json({
    status: 200,
    message: 'update me',
    data: {
      user,
    },
  });
});

export const deleteMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, { active: false });

  if (!user) return next(new AppError('No user found with that ID', 404));

  res.cookie('jwt', 'delete user', {
    expires: new Date(Date.now()),
  });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// ************CRUD***************
export const getAllUsers = catchAsync(async (req, res, next) => {
  const { search, role } = req.query;

  const queryObj = {};
  if (search) {
    queryObj.$or = [
      { firstName: { $regex: search, $options: 'i' } },
      { lastName: { $regex: search, $options: 'i' } },
    ];
  }

  if (role) {
    queryObj.role = role;
  }

  const users = await User.find(queryObj);

  res.status(200).json({
    status: 'success',
    message: 'get all users',
    results: users.length,
    data: {
      users,
    },
  });
});

export const createUser = catchAsync(async (req, res, next) => {
  // check if file and upload it
  let photo = DEFAULT_USER_AVATAR;
  if (req.file) {
    // TODO:
    // photo = await uploadSingleImage(req.file);
  }

  // create a user
  const user = await User.create({ ...req.body, photo });

  // send response
  res.status(200).json({
    status: 'success',
    message: 'Create user',
    data: {
      user,
    },
  });
});

export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id)
    .populate({
      path: 'bookings',
    })
    .populate({
      path: 'hotel',
      select: `name hotelStar imageCover avgRating address summary`,
    });

  if (!user) return next(new AppError('No user found with that ID', 404));

  res.status(200).json({
    status: 'success',
    message: 'Get user',
    data: {
      user,
    },
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) return next(new AppError('No user found with that ID', 404));

  // upload images if the user updates his avatar
  let photo = DEFAULT_USER_AVATAR;
  if (req.file) {
    // TODO:
    // photo = await uploadSingleImage(req.file);
  }

  user.photo = photo;
  await user.save({ validateBeforeSave: false });

  // return response
  res.status(200).json({
    status: 'success',
    message: 'Update user',
    data: {
      user,
    },
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (!user) return next(new AppError('No user found with that ID', 404));

  res
    .status(204)
    .json({ status: 'success', message: 'Delete user', data: null });
});
