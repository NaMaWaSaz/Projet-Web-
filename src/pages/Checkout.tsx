import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShippingForm } from '../components/checkout/ShippingForm';
import { PaymentForm } from '../components/checkout/PaymentForm';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { PaymentMethodSelector } from '../components/checkout/PaymentMethodSelector';
import { useCartStore } from '../store/useCartStore';

export function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically:
    // 1. Validate all form data
    // 2. Process payment if payment method is card
    // 3. Create order in backend
    // 4. Show confirmation
    
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <ShippingForm onSubmit={() => {}} />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <PaymentMethodSelector
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />
          </div>

          {paymentMethod === 'card' && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <PaymentForm onSubmit={() => {}} />
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {paymentMethod === 'cash' ? 'Place Order (Cash on Delivery)' : 'Place Order'}
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <OrderSummary />
        </div>
      </form>
    </div>
  );
}