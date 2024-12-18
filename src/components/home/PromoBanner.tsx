import React from 'react';
import { Truck, Shield, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    name: 'Free Shipping',
    description: 'On orders over $100',
    icon: Truck,
  },
  {
    name: 'Secure Payment',
    description: '100% secure payment',
    icon: Shield,
  },
  {
    name: '24/7 Support',
    description: 'Dedicated support',
    icon: Clock,
  },
  {
    name: 'Easy Returns',
    description: '30 days return policy',
    icon: CreditCard,
  },
];

export function PromoBanner() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div className="flex items-center justify-center">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}