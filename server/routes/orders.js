import express from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import {
  createOrder,
  getOrderById,
  getUserOrders,
  updateOrderStatus
} from '../models/order.js';

const router = express.Router();

// Create new order
router.post('/', authenticate, async (req, res, next) => {
  try {
    const orderData = {
      ...req.body,
      user_id: req.user.id
    };

    const orderId = await createOrder(orderData);
    const order = await getOrderById(orderId);
    
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
});

// Get user's orders
router.get('/my-orders', authenticate, async (req, res, next) => {
  try {
    const orders = await getUserOrders(req.user.id);
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

// Get single order
router.get('/:id', authenticate, async (req, res, next) => {
  try {
    const order = await getOrderById(req.params.id);
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if user is authorized to view this order
    if (order.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
});

// Update order status (admin only)
router.patch('/:id/status',
  authenticate,
  authorize(['admin']),
  async (req, res, next) => {
    try {
      const { status } = req.body;
      
      if (!['pending', 'processing', 'shipped', 'delivered', 'cancelled'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
      }

      const order = await updateOrderStatus(req.params.id, status);
      
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }

      res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

export default router;