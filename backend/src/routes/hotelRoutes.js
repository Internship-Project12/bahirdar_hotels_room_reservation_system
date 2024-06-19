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
  .post(
    upload.fields([
      { name: 'imageCoverFile', maxCount: 1 },
      { name: 'hotelImagesFiles', maxCount: 10 },
    ]),
    createHotel
  );

router
  .route('/:id')
  .get(getHotel)
  .patch(
    upload.fields([
      { name: 'imageCoverFile', maxCount: 1 },
      { name: 'hotelImagesFiles', maxCount: 10 },
    ]),
    updateHotel
  )
  .delete(deleteHotel);

export default router;
