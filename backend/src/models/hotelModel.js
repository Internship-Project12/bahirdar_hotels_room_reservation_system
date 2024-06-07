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
    defaultValue: 0,
  },
  avgRating: {
    type: Number,
    defaultValue: 4.5,
  },
  address: String,
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
