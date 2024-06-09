import * as dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import hotelRouter from './src/routes/hotelRoutes.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/api/v1/test', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello from the server | Hotel Booking App',
  });
});

app.use('/api/v1/hotels', hotelRouter);

const PORT = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.DB);
  app.listen(PORT, () => {
    console.log(`DB connected... and Server running on port ${PORT}...`);
  });
} catch (error) {
  console.log('ERROR', error);
  process.exit(1);
}
