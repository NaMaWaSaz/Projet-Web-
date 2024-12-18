import React from 'react';
import { Truck, Shield, Clock } from 'lucide-react';

export function ProductFeatures() {
  return (
    <div className="border-t border-b py-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Truck className="text-blue-600 mr-2" />
          <span className="text-sm">Free Shipping</span>
        </div>
        <div className="flex items-center">
          <Shield className="text-blue-600 mr-2" />
          <span className="text-sm">2 Year Warranty</span>
        </div>
        <div className="flex items-center">
          <Clock className="text-blue-600 mr-2" />
          <span className="text-sm">24/7 Support</span>
        </div>
      </div>
    </div>
  );
}