import mongoose from 'mongoose';
// import User from './userModel.js';
import Hotel from './hotelModel.js';

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A review must belong to a user'],
    },
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hotel',
      required: [true, 'A review must belong to a hotel'],
    },
    rating: {
      type: Number,
      required: [true, 'A review must have a rating'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must be at most 5'],
    },
    comment: {
      type: String,
      trim: true,
      required: [true, 'A review must have a comment'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// Prevent multiple reviews from the same user for the same hotel
reviewSchema.index({ hotel: 1, user: 1 }, { unique: true });

// calculate avg rating and number of ratings for a hotel
reviewSchema.statics.calcAvgRating = async function (hotelId) {
  const stats = await this.aggregate([
    { $match: { hotel: hotelId } },
    {
      $group: {
        _id: '$hotel',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Hotel.findByIdAndUpdate(hotelId, {
      numOfRatings: stats[0].nRating,
      avgRating: Math.floor(stats[0].avgRating * 10) / 10,
    });
  } else {
    await Hotel.findByIdAndUpdate(hotelId, {
      numOfRatings: 0,
      avgRating: 4.5,
    });
  }
};

reviewSchema.pre('save', function (next) {
  this.constructor.calcAvgRating(this.hotel);

  next();
});

// Populate the user and hotel fields when querying reviews
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'firstName lastName photo', // Adjust fields as per your user model
  })
  // .populate({
  //   path: 'hotel',
  //   select: 'name', // Adjust fields as per your hotel model
  // });

  next();
});

const Review = mongoose.model('Review', reviewSchema);

Review.on('index', function (error) {
  if (error) {
    console.error('Index creation failed on review model:', error);
  }
});

export default Review;
