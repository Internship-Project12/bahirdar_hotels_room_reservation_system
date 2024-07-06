import express from 'express';
import morgan from 'morgan';

import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from 'cookie-parser';

import globalErrorHandlerMiddleWare from './middlewares/globalErrorHandlerMiddleWare.js';
import AppError from './utils/appError.js';

import hotelRouter from './routes/hotelRoutes.js';
import userRouter from './routes/userRoutes.js';
import roomRouter from './routes/roomRoutes.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Set security HTTP headers
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "img-src 'self' data: http://res.cloudinary.com"
  );
  next();
});

// if (process.env.NODE_ENV === 'development') {
// }
app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //  is used for parsing x-www-form-urlencoded request bodies

app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, './../frontend/dist')));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

app.use('/', (req, res, next) => {
  // console.log(req.cookies);
  // res.status(200).json({
  //   status: 'success',
  //   message: 'Hello from the server | Hotel Booking App',
  // });
  next();
});

app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/rooms', roomRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../frontend/dist', 'index.html'));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
// });

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandlerMiddleWare);

export default app;
