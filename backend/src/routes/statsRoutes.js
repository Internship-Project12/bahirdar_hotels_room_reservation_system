import express from 'express';
import { getCountDocs } from '../controllers/statsController.js';

const router = express.Router();
// todo: protect route
router.route('/count-all-docs').get(getCountDocs);

export default router;
