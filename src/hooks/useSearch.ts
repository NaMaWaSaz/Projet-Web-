import { useState, useEffect } from 'react';
import { Product } from '../types';
import { useProducts } from './useProducts';

export function useSearch() {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });

    setSearchResults(results);
  }, [searchQuery, products]);

  return { searchQuery, setSearchQuery, searchResults };
}