import { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProductById } from '../utils/productUtils';

export function useProduct(productId: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      if (productId) {
        const foundProduct = await getProductById(productId);
        setProduct(foundProduct);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [productId]);

  return { product, isLoading };
}