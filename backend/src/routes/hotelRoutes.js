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

import roomRouter from './roomRoutes.js';
import reviewRouter from './reviewRoutes.js';

const router = express.Router();

router.use('/:hotelId/rooms', roomRouter);
router.use('/:hotelId/reviews', reviewRouter);

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
