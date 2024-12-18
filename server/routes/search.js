import express from 'express';
import { searchProducts } from '../models/search.js';
import { searchFiltersSchema } from '../utils/validationUtils.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const {
      q: query,
      categories,
      minPrice,
      maxPrice,
      minRating,
      inStock,
      sortBy,
      page,
      limit
    } = req.query;

    // Validate search parameters
    const validatedParams = searchFiltersSchema.parse({
      query,
      categories: categories?.split(','),
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      minRating: minRating ? Number(minRating) : undefined,
      inStock: inStock === 'true',
      sortBy,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20
    });

    const results = await searchProducts(validatedParams);
    res.json(results);
  } catch (error) {
    next(error);
  }
});

export default router;