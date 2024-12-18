import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  onClick: () => void;
}

export function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
    >
      <ShoppingCart size={20} />
      <span>Add to Cart</span>
    </button>
  );
}