import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    description: String,
    starRating: {
      type: Number,
    },
    imageCover: {
      type: String,
      default: '',
    },
    numOfRatings: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 4.5,
    },
    address: String,
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
