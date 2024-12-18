import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface PricingSectionProps {
  register: UseFormRegister<any>;
  errors: any;
}

export function PricingSection({ register, errors }: PricingSectionProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Pricing & Inventory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price (TND)
          </label>
          <div className="relative">
            <input
              {...register('price')}
              type="text"
              placeholder="0.000"
              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-2 text-gray-500">د.ت</span>
          </div>
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity Available
          </label>
          <input
            {...register('quantity')}
            type="number"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}