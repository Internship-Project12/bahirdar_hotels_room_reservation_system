import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  description: String,
  photo: {
    type: [string],
    default:
      'https://res-console.cloudinary.com/dvp1mjhd9/media_explorer_thumbnails/49079a5e95d6f6dae292921867849d2b/detailed',
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
});

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
