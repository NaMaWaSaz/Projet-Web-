import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ImageUpload } from './ImageUpload';
import { CategorySelect } from './CategorySelect';
import { PricingSection } from './PricingSection';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const listingSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.string().min(1, 'Please select a category'),
  condition: z.enum(['new', 'like-new', 'good', 'fair']),
  price: z.string().regex(/^\d+(\.\d{1,3})?$/, 'Invalid price format'),
  quantity: z.string().regex(/^\d+$/, 'Quantity must be a number'),
  images: z.any(),
  specifications: z.array(z.object({
    label: z.string(),
    value: z.string()
  })).optional(),
  shippingOptions: z.array(z.string()).min(1, 'Select at least one shipping option'),
});

type ListingForm = z.infer<typeof listingSchema>;

interface ListingFormProps {
  onSubmit: (data: ListingForm) => void;
}

export function ListingForm({ onSubmit }: ListingFormProps) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<ListingForm>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      condition: 'new',
      shippingOptions: [],
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        {/* Basic Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                {...register('title')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a descriptive title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register('description')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your product in detail"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Category and Condition */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Category & Condition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategorySelect register={register} error={errors.category} />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>
              <select
                {...register('condition')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>
        </div>

        {/* Images */}
        <ImageUpload register={register} error={errors.images} />

        {/* Pricing and Inventory */}
        <PricingSection register={register} errors={errors} />

        {/* Shipping Options */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('shippingOptions')}
                value="standard"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Standard Shipping</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('shippingOptions')}
                value="express"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Express Shipping</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register('shippingOptions')}
                value="pickup"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Local Pickup</span>
            </label>
          </div>
          {errors.shippingOptions && (
            <p className="text-red-500 text-sm mt-1">{errors.shippingOptions.message}</p>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-between items-center">
        <Link
          to="/seller/dashboard"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Dashboard
        </Link>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Listing
        </button>
      </div>
    </form>
  );
}