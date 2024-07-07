import APIFeatures from '../utils/apiFeatures.js';
import catchAsync from '../utils/catchAsync.js';
import Review from '../models/reviewModel.js';

const getAllReviews = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Review.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const reviews = await features.query;

  res.status(200).json({
    status: 'success',
    message: 'get all reviews',
    numOfResults: reviews.length,
    data: {
      reviews,
    },
  });
});

const getReview = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findById(id);

  if (!review) {
    return next(new AppError('there is no review found with that id', 404));
  }

  res.status(200).json({
    status: 'success',
    message: 'get review',
    data: {
      review,
    },
  });
});

const createReview = catchAsync(async (req, res, next) => {
  const review = await Review.create(req.body);

  res.status(200).json({
    status: 'success',
    message: 'create review',
    data: {
      review,
    },
  });
});

const updateReview = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!review) {
    return next(new AppError('there is no review found with that id', 404));
  }

  // UPDATE THE HOTEL BASED ON THE RATING GIVEN ON THE REVIEW
  review.constructor.calcAvgRating(review.hotel);

  res.status(200).json({
    status: 'success',
    message: 'update review',
    data: {
      review,
    },
  });
});

const deleteReview = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const review = await Review.findByIdAndDelete(id);

  if (!review) {
    return next(new AppError('there is no review found with that id', 404));
  }

  // UPDATE THE HOTEL NUMBER OF RATING AND AVG RATING ON DELETING A REVIEW
  review.constructor.calcAvgRating(review.hotel);

  res.status(204).json({
    status: 'success',
    message: 'delete review',
    data: null,
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
