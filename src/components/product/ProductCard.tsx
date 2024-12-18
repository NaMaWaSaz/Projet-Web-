import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ product, quantity: 1 });
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
          <Heart size={20} />
        </button>
        {product.stock < 5 && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-red-500 text-white rounded">
            Low Stock
          </span>
        )}
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{formatCurrency(product.price)}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}