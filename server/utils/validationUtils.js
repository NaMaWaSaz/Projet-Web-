import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  price: z.number().positive('Price must be positive'),
  stock: z.number().int().nonnegative('Stock must be non-negative'),
  category_id: z.number().positive('Category is required'),
  specifications: z.array(z.object({
    label: z.string(),
    value: z.string()
  })).optional()
});

export const searchFiltersSchema = z.object({
  query: z.string().optional(),
  categories: z.array(z.string()).optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  minRating: z.number().min(0).max(5).optional(),
  inStock: z.boolean().optional(),
  sortBy: z.enum(['price_asc', 'price_desc', 'rating', 'newest']).optional(),
  page: z.number().int().positive().optional(),
  limit: z.number().int().positive().max(100).optional()
});