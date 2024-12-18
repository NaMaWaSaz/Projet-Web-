import express from 'express';
import Stripe from 'stripe';
import { authenticate } from '../middleware/auth.js';
import { getOrderById, updateOrderStatus } from '../models/order.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/create-payment-intent', authenticate, async (req, res, next) => {
  try {
    const { orderId } = req.body;

    const order = await getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(order.total_amount * 1000), // Convert to cents
      currency: 'tnd',
      metadata: {
        orderId: order.id,
        userId: req.user.id
      }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    next(error);
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        const { orderId } = event.data.object.metadata;
        await updateOrderStatus(orderId, 'processing');
        break;
      
      case 'payment_intent.payment_failed':
        // Handle failed payment
        break;
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

export default router;