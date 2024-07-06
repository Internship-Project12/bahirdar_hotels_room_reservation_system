import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a name'],
      minlength: [5, 'A hotel name must have more or equal then 5 characters'],
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
    minPricePerNight: {
      type: Number,
      min: 0,
    },
    numOfRooms: {
      type: Number,
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
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A hotel must have a summary'],
      minlength: [
        50,
        'A hotel summary must have more or equal then 20 characters',
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
    facilities: {
      type: [String],
      required: [true, 'hotels must have some facilities'],
    },
    manager: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A hotel must have a manager'],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
  {
    timestamps: true,
  }
);

hotelSchema.virtual('rooms', {
  ref: 'Room',
  foreignField: 'hotel',
  localField: '_id',
});

const Hotel = mongoose.model('Hotel', hotelSchema);

export default Hotel;
