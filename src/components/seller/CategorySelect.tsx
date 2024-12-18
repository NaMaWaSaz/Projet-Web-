import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface CategorySelectProps {
  register: UseFormRegister<any>;
  error?: any;
}

export function CategorySelect({ register, error }: CategorySelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Category
      </label>
      <select
        {...register('category')}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a category</option>
        <option value="computers">Computers</option>
        <option value="laptops">Laptops</option>
        <option value="components">Components</option>
        <option value="tvs">TVs</option>
        <option value="appliances">Appliances</option>
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}