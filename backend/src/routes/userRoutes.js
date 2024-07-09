import { Router } from 'express';

import * as userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';
import upload from '../middlewares/multerMiddleware.js';

const router = Router();

// SIGNUP AND LOGIN
router.post('/signup', upload.single('photo'), authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword/:resetToken', authController.resetPassword);

// PROTECT ROUTES
router.use(authController.protect);

// LOGOUT
router.post('/logout', authController.logout);

// CURRENT USER
router.get('/me', userController.getMe, userController.getUser);
router.patch('/updateMe', upload.single('photo'), userController.updateMe);
router.patch('/updateMyPassword', authController.updateMyPassword);
router.delete('/deleteMe', userController.deleteMe);

// RESTRICT ACCESS TO ROUTES
router.use(authController.restrictTo('admin'));

// CRUD
router
  .route('/')
  .get(userController.getAllUsers)
  .post(upload.single('photo'), userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(upload.single('photo'), userController.updateUser)
  .delete(userController.deleteUser);

export default router;
