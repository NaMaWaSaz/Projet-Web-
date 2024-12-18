import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../product/ProductCard';

export function FeaturedProducts() {
  const { products, isLoading } = useProducts();
  
  // Simulate featured products by selecting products with high ratings
  const featuredProducts = products
    .filter(product => product.rating >= 4.5)
    .slice(0, 4);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-lg h-80 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}