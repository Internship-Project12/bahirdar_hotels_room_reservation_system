import mongoose from 'mongoose';
import Hotel from './hotelModel.js';

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: [true, 'A room must have a room number'],
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
      default: ['Wi-Fi', 'Air Conditioning', 'Television'], // Default amenities
      // "amenities": ["Wi-Fi", "Air Conditioning", "Television", "Mini Fridge", "Coffee Maker", "Room Service", "Safe", "Hair Dryer", "Iron and Ironing Board", "Toiletries", "Desk and Chair"],
      required: [true, 'A room must have amenities'],
    },
    capacity: {
      type: Number,
      required: [true, 'A room must have a capacity']
    },
    description: {
      type: String,
      required: [true, 'A room must have a description'],
    },
    images: {
      type: [String],
      required: [true, 'A room must have images'],
    },
    // bookingHistory: [{ startDate: Date, endDate: Date }],
    hotel: {
      type: mongoose.Schema.ObjectId,
      ref: 'Hotel',
      required: [true, 'A room must belong to a hotel'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

// this will prevent creating the same roomNumber on the same hotel
roomSchema.index({ hotel: 1, roomNumber: 1 }, { unique: true });

// calcMinPriceAndNumOfRooms
roomSchema.statics.calcMinPriceAndNumOfRooms = async function (hotelId) {
  const stats = await this.aggregate([
    { $match: { hotel: hotelId } },
    {
      $group: {
        _id: '$hotel',
        numOfRooms: { $sum: 1 },
        minPrice: { $min: '$pricePerNight' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Hotel.findByIdAndUpdate(hotelId, {
      numOfRooms: stats[0].numOfRooms,
      minPricePerNight: stats[0].minPrice,
    });
  } else {
    await Hotel.findByIdAndUpdate(hotelId, {
      numOfRooms: 1,
      minPricePerNight: 0,
    });
  }
};

roomSchema.pre('save', function (next) {
  this.constructor.calcMinPriceAndNumOfRooms(this.hotel);

  next();
});

const Room = mongoose.model('Room', roomSchema);

// check the creation of the index
Room.on('index', function (error) {
  if (error) {
    console.error('Index creation failed on room model:', error);
  }
});

export default Room;
