import * as dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import mongoose from 'mongoose';


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
