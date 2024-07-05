import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import { createJWT, verifyJWT } from '../utils/tokenUtils.js';

// SIGNUP A USER
const signup = catchAsync(async (req, res, next) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { firstName, lastName, email, password, passwordConfirm, phoneNumber } =
    req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
    phoneNumber,
  });

  const token = createJWT({ id: newUser._id });

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  // Remove the password from the output | it does not alter the database
  newUser.password = undefined;

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

// LOGIN FUNCTIONALITY
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password');

  const isCorrectPass = await user?.isCorrectPassword(password, user.password);

  if (!user || !isCorrectPass) {
    return next(new AppError(' Incorrect email or password', 401));
  }

  // 3) If everything ok, send token to client
  const token = createJWT({ id: user._id });

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  user.password = undefined;

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});

// LOGOUT A USER
const logout = (req, res, next) => {
  res.cookie('jwt', 'loggedOut', {
    expires: new Date(Date.now()),
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
  });

  res.status(200).json({
    status: 'success',
  });
};

// PROTECT ROUTES
const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  // 2) Verification token
  const decoded = verifyJWT(token);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);

  if (!currentUser) {
    return next(
      new AppError('The User belonging to the token doe no longer exist', 401)
    );
  }

  // 4) Check if user changed password after the token was issued
  const isChangedPasswordAfter = currentUser.changedPasswordAfter(decoded.iat);
  if (isChangedPasswordAfter) {
    return next(
      new AppError('User recently changed password! Please log in again')
    );
  }

  req.user = currentUser;

  // GRANT ACCESS TO PROTECTED ROUTE
  next();
});

// RESTRICT ACCESS TO ROUTES
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }

    next();
  };
};

export const forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new AppError('Please provide your email add', 401));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new AppError('There is no user found with that email address', 401)
    );
  }


  res.status(200).json({
    status: 'success',
    message: 'forgot password',
  });
});

const updateMyPassword = catchAsync(async (req, res, next) => {
  const { passwordCurrent, password, passwordConfirm } = req.body;

  if (!passwordCurrent || !password || !passwordConfirm) {
    return next(
      new AppError(
        'Please provide all the required fields, passwordCurrent, password, passwordConfirm',
        400
      )
    );
  }

  const user = await User.findById(req.user._id).select('+password');

  const isCorrectPassword = await user?.isCorrectPassword(
    passwordCurrent,
    user.password
  );

  if (!user || !isCorrectPassword) {
    return next(new AppError('Incorrect password', 401));
  }

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  await user.save();

  // 3) If everything ok, send token to client
  const token = createJWT({ id: user._id });

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  user.password = undefined;

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});

const authController = {
  signup,
  login,
  protect,
  logout,
  restrictTo,
  updateMyPassword,
  forgotPassword,
};

export default authController;
