import express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from '../controllers/hotelController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getAllHotels)
  .post(upload.single('imageCover'), createHotel);

router.route('/:id').get(getHotel).patch(updateHotel).delete(deleteHotel);

export default router;
