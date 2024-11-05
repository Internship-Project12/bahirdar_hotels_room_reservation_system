import express from 'express';
import { getCountDocs, getHotelStats } from '../controllers/statsController.js';

const router = express.Router();
// todo: protect route
router.route('/count-all-docs').get(getCountDocs);
router.route('/hotel-stats/:hotelId').get(getHotelStats);

export default router;
