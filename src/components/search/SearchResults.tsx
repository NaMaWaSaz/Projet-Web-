import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

interface SearchResultsProps {
  results: Product[];
  onClose: () => void;
}

export function SearchResults({ results, onClose }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
      {results.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
          onClick={onClose}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="ml-4 flex-1">
            <h3 className="font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
            <span className="text-blue-600 font-medium">{formatCurrency(product.price)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}