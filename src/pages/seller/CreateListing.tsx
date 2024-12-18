import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListingForm } from '../../components/seller/ListingForm';
import { ImageUpload } from '../../components/seller/ImageUpload';
import { CategorySelect } from '../../components/seller/CategorySelect';
import { PricingSection } from '../../components/seller/PricingSection';

export function CreateListing() {
  const navigate = useNavigate();

  const handleSubmit = async (data: any) => {
    // Here you would typically:
    // 1. Upload images to storage
    // 2. Create listing in database
    // 3. Redirect to the listing page
    console.log('Listing data:', data);
    navigate('/seller/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Listing</h1>
      <ListingForm onSubmit={handleSubmit} />
    </div>
  );
}