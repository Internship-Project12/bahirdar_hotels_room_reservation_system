import 'dotenv/config';

// using undeclared vars console.log(x) -- handles uncaughtException for asynchronous code
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...', err);
  console.log(err.name, err.message);
  process.exit(1);
});

import app from './app.js';
import mongoose from 'mongoose';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

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

// unhandled promise rejections for asynchronous code
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
