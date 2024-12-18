import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviews: number;
}

export function ProductRating({ rating, reviews }: ProductRatingProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
          />
        ))}
      </div>
      <span className="text-gray-600">({reviews} reviews)</span>
    </div>
  );
}