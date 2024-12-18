import React from 'react';
import { CreditCard, Banknote } from 'lucide-react';

interface PaymentMethodSelectorProps {
  selectedMethod: 'card' | 'cash';
  onMethodChange: (method: 'card' | 'cash') => void;
}

export function PaymentMethodSelector({ selectedMethod, onMethodChange }: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
      
      <div className="space-y-3">
        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={selectedMethod === 'card'}
            onChange={() => onMethodChange('card')}
            className="h-4 w-4 text-blue-600"
          />
          <div className="ml-3 flex items-center">
            <CreditCard className="h-6 w-6 text-gray-400 mr-2" />
            <div>
              <span className="font-medium">Credit Card</span>
              <p className="text-sm text-gray-500">Pay securely with your credit card</p>
            </div>
          </div>
        </label>

        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={selectedMethod === 'cash'}
            onChange={() => onMethodChange('cash')}
            className="h-4 w-4 text-blue-600"
          />
          <div className="ml-3 flex items-center">
            <Banknote className="h-6 w-6 text-gray-400 mr-2" />
            <div>
              <span className="font-medium">Cash on Delivery</span>
              <p className="text-sm text-gray-500">Pay with cash when your order arrives</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}