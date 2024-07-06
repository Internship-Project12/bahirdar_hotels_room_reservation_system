import express from 'express';
import roomController from '../controllers/roomController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.use(
  authController.protect,
  authController.restrictTo('admin', 'manager')
);

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(roomController.createRoom);

router
  .route('/:id')
  .get(roomController.getRoom)
  .patch(roomController.updateRoom)
  .delete(roomController.deleteRoom);

export default router;
