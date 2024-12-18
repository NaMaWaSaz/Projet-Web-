import { Product } from '../types';
import { SortOption } from '../components/category/CategorySort';

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const productsCopy = [...products];

  switch (sortBy) {
    case 'price_asc':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return productsCopy.sort((a, b) => b.price - a.price);
    case 'rating':
      return productsCopy.sort((a, b) => {
        if (b.rating === a.rating) {
          return b.reviews - a.reviews;
        }
        return b.rating - a.rating;
      });
    default:
      return productsCopy.sort((a, b) => {
        const aScore = a.rating * Math.min(a.stock, 5);
        const bScore = b.rating * Math.min(b.stock, 5);
        return bScore - aScore;
      });
  }
}