import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a name'],
      minlength: [5, 'A hotel name must have more or equal then 5 characters'],
      maxlength: [
        50,
        'A hotel name must have less or equal then 50 characters',
      ],
    },

    starRating: {
      type: Number,
    },
    imageCover: {
      type: String,
      required: [true, 'A hotel must have a cover image'],
    },
    hotelImages: {
      type: [String],
      required: [true, 'A hotel must have additional images'],
    },
    pricePerNight: {
      type: Number,
      required: [true, 'A hotel must have a price'],
      min: 0,
    },
    numOfRooms: {
      type: Number,
      required: [true, 'A hotel must have a number of rooms'],
      min: [1, 'a hotel must have at least one room'],
    },
    numOfRatings: {
      type: Number,
      default: 0,
    },
    avgRating: {
      type: Number,
      default: 4.5,
    },
    address: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have an address'],
      minlength: [
        10,
        'A hotel address must have more or equal then 10 characters',
      ],
      maxlength: [
        100,
        'A hotel address must have less or equal then 100 characters',
      ],
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a summary'],
      minlength: [
        20,
        'A hotel summary must have more or equal then 20 characters',
      ],
      maxlength: [
        100,
        'A hotel summary must have less or equal then 100 characters',
      ],
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a description'],
      minlength: [
        50,
        'A hotel description must have more or equal then 50 characters',
      ],
    },
  },
  {
    timestamps: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
