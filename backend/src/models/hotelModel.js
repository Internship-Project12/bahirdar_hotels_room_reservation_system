import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  description: String,
  photo: [String],
  numOfRatings: {
    type: Number,
    default: 0,
  },
  avgRating: {
    type: Number,
    default: 4.5,
  },
  address: String,
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
