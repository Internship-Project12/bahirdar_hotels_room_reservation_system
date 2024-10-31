import express from 'express';
import bookingController from '../controllers/bookingController.js';
import authController from '../controllers/authController.js';

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.post(
  '/accept-payment-chapa/:roomId',
  bookingController.acceptPaymentChapa
);
router.post('/verify-payment-chapa', bookingController.verifyPaymentChapa);

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

export default router;
