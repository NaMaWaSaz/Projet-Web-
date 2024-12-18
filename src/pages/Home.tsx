import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductGrid } from '../components/product/ProductGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { HeroSection } from '../components/home/HeroSection';
import { PromoBanner } from '../components/home/PromoBanner';

export function Home() {
  const { products, isLoading } = useProducts();

  return (
    <div className="space-y-8">
      <HeroSection />
      <PromoBanner />
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <FeaturedProducts />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <ProductGrid products={products} isLoading={isLoading} />
      </section>
    </div>
  );
}