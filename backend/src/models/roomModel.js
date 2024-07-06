import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: [true, 'A room must have a room number'],
    unique: [true, 'A room number must be unique'],
  },
  type: {
    type: String,
    required: [true, 'A room must have a type'],
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
});

const Room = mongoose.model('Room', RoomSchema);

export default Room;
