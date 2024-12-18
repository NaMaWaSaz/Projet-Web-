import React from 'react';
import { Filter } from 'lucide-react';

export type SortOption = 'featured' | 'price_asc' | 'price_desc' | 'rating';

interface CategorySortProps {
  sortBy: SortOption;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function CategorySort({ sortBy, onSortChange }: CategorySortProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
        <Filter size={20} />
        <span>Filters</span>
      </button>
      
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Sort by:</span>
        <select 
          value={sortBy}
          onChange={onSortChange}
          className="border rounded-lg px-4 py-2 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="featured">Featured</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>
    </div>
  );
}