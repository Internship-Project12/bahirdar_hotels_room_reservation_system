import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: [true, 'A room must have a room number'],
      unique: [true, 'A room number must be unique'],
    },
    roomType: {
      type: String,
      required: [true, 'A room must have a type'],
      enum: {
        values: [
          'single', // One single bed, basic amenities - Solo travelers, business travelers
          'double', // One double or queen-sized bed - Couples, friends
          'twin', // Two single beds - Friends, colleagues, siblings
          'triple', // Three single beds or one double and one single bed -	Small families, friends
          'quad', // Four single beds or two double beds -	Families, groups of friends
          'twin-double', // Two double beds - Families, groups of friends
        ],
        message:
          'Room type is either: single, double, twin, triple, quad, twin-double',
      },
    },
    pricePerNight: {
      type: Number,
      required: [true, 'A room must have a price'],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    amenities: {
      type: [String],
    },
    capacity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    images: {
      type: [String],
    },
    // bookingHistory: [{ startDate: Date, endDate: Date }],
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hotel',
      required: [true, 'A room must belong to a hotel'],
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

roomSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'hotel',
    select: 'name starRating imageCover',
  });

  next();
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
