import React from 'react';
import { CreditCard } from 'lucide-react';

export function PaymentMethods() {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <CreditCard className="h-8 w-8" />
        <span>Visa</span>
      </div>
      <div className="flex items-center space-x-2">
        <CreditCard className="h-8 w-8" />
        <span>Mastercard</span>
      </div>
      <div className="flex items-center space-x-2">
        <CreditCard className="h-8 w-8" />
        <span>American Express</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg
          className="h-8 w-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 10V14C2 16.2091 3.79086 18 6 18H18C20.2091 18 22 16.2091 22 14V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10ZM6 8C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H6Z" />
        </svg>
        <span>Cash on Delivery</span>
      </div>
    </div>
  );
}