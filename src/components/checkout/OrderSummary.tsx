import React from 'react';
import { useCartStore } from '../../store/useCartStore';
import { formatCurrency } from '../../utils/formatCurrency';

export function OrderSummary() {
  const { items } = useCartStore();
  
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 7.000; // Standard shipping cost in TND
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between text-sm">
            <span className="text-gray-600">
              {item.product.name} x {item.quantity}
            </span>
            <span className="font-medium">
              {formatCurrency(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
        
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">{formatCurrency(shipping)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}