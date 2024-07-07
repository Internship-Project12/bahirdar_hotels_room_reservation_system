import catchAsync from '../utils/catchAsync.js';

const getAllReviews = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get all reviews',
  });
});

const getReview = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'get review',
  });
});

const createReview = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'create review',
  });
});

const updateReview = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'update review',
  });
});

const deleteReview = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'delete review',
  });
});

const reviewController = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};

export default reviewController;
