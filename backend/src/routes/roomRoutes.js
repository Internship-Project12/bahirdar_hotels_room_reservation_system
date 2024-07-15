import express from 'express';
import roomController from '../controllers/roomController.js';
import authController from '../controllers/authController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = express.Router({ mergeParams: true });

router.use(
  authController.protect,
  authController.restrictTo('admin', 'manager')
);

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(upload.array('RoomImageFiles', 10), roomController.createRoom);

router
  .route('/:id')
  .get(roomController.getRoom)
  .patch(upload.array('RoomImageFiles', 10), roomController.updateRoom)
  .delete(roomController.deleteRoom);

export default router;
