import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { ProductGrid } from '../../components/product/ProductGrid';
import { CategoryHero } from '../../components/category/CategoryHero';
import { CategorySort, SortOption } from '../../components/category/CategorySort';
import { categoryInfo, CategoryType } from '../../utils/categoryUtils';
import { sortProducts } from '../../utils/sortUtils';

export function CategoryPage() {
  const { category = '' } = useParams();
  const { products, isLoading } = useProducts(category);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const info = categoryInfo[category as CategoryType];

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    return sortProducts(products, sortBy);
  }, [products, sortBy]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortOption);
  };

  return (
    <div className="space-y-8">
      <CategoryHero
        title={info?.title}
        description={info?.description}
        image={info?.image}
      />
      
      <CategorySort
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />

      <ProductGrid products={sortedProducts} isLoading={isLoading} />
    </div>
  );
}