import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';

import hotelRouter from './src/routes/hotelRoutes.js';
import userRouter from './src/routes/hotelRoutes.js';
import globalErrorHandlerMiddleWare from './src/middlewares/globalErrorHandler.js';
import AppError from './src/utils/appError.js';

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
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandlerMiddleWare);

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
