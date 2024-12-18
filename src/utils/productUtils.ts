import { Product } from '../types';
import { laptopProducts } from './laptopUtils';
import { computerProducts } from './computerUtils';
import { componentProducts } from './componentUtils';
import { tvProducts } from './tvUtils';
import { applianceProducts } from './applianceUtils';

const allProducts = [
  ...computerProducts,
  ...laptopProducts,
  ...componentProducts,
  ...tvProducts,
  ...applianceProducts
];

export async function getProductById(productId: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return allProducts.find(p => p.id === productId) || null;
}