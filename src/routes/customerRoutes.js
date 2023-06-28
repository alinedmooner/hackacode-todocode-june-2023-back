import express from 'express';
import { getCustomers, getCustomerById } from '../controllers/customerController.js';

const router = express.Router();

router.route('/').get(getCustomers);

router.route('/:id').get(getCustomerById);

export default router;
