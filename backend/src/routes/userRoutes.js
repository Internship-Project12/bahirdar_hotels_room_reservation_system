import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../controllers/authController.js';

const router = Router();

router.post('/signup', authMiddleware.signup);
router.post('/login', authMiddleware.login);

router
  .route('/')
  .get(authMiddleware.protect, userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
