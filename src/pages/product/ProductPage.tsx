import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useCartStore } from '../../store/useCartStore';
import { ProductImage } from '../../components/product/ProductImage';
import { ProductRating } from '../../components/product/ProductRating';
import { ProductFeatures } from '../../components/product/ProductFeatures';
import { ProductSpecs } from '../../components/product/ProductSpecs';
import { AddToCartButton } from '../../components/product/AddToCartButton';
import { CategoryLink } from '../../components/product/CategoryLink';
import { formatCurrency } from '../../utils/formatCurrency';

export function ProductPage() {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId);
  const addItem = useCartStore((state) => state.addItem);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({ product, quantity: 1 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <CategoryLink category={product.category} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImage 
          src={product.image} 
          alt={product.name} 
          stock={product.stock} 
        />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <ProductRating rating={product.rating} reviews={product.reviews} />

          <div className="text-3xl font-bold">
            {formatCurrency(product.price)}
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <ProductFeatures />

          <AddToCartButton onClick={handleAddToCart} />

          {product.specs && <ProductSpecs specs={product.specs} />}
        </div>
      </div>
    </div>
  );
}