import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

const router = Router();

// SIGNUP AND LOGIN
router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);

router.get('/forgot');

// PROTECT ROUTES
router.use(authController.protect);

// LOGOUT
router.post('/logout', authController.logout);

// CURRENT USER
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', userController.updateMe);
router.patch('/updateMyPassword', authController.updateMyPassword);
router.delete('/deleteMe', userController.deleteMe);

// RESTRICT ACCESS TO ROUTES
router.use(authController.restrictTo('admin'));

// CRUD
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
