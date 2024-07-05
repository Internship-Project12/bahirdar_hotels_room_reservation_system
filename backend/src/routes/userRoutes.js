import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

const router = Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.use(authController.protect)

router.post('/logout', authController.logout);
router.get('/me', userController.getMe, userController.getUser)


router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
