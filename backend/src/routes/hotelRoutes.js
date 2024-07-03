import express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from '../controllers/hotelController.js';
import upload from '../middlewares/multerMiddleware.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .get(getAllHotels)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
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
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    upload.fields([
      { name: 'imageCoverFile', maxCount: 1 },
      { name: 'hotelImagesFiles', maxCount: 10 },
    ]),
    updateHotel
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deleteHotel
  );

export default router;
