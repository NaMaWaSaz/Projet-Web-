// Search utility functions
export const buildSearchQuery = (searchTerm, filters = {}) => {
  const conditions = [];
  const params = [];

  // Full-text search on product name and description
  if (searchTerm) {
    conditions.push(`(
      p.name LIKE ? OR 
      p.description LIKE ? OR
      c.name LIKE ?
    )`);
    const searchPattern = `%${searchTerm}%`;
    params.push(searchPattern, searchPattern, searchPattern);
  }

  // Price range filter
  if (filters.minPrice !== undefined) {
    conditions.push('p.price >= ?');
    params.push(filters.minPrice);
  }
  if (filters.maxPrice !== undefined) {
    conditions.push('p.price <= ?');
    params.push(filters.maxPrice);
  }

  // Category filter
  if (filters.categories?.length) {
    conditions.push(`c.slug IN (${filters.categories.map(() => '?').join(',')})`);
    params.push(...filters.categories);
  }

  // Rating filter
  if (filters.minRating) {
    conditions.push('p.rating >= ?');
    params.push(filters.minRating);
  }

  // Stock status filter
  if (filters.inStock) {
    conditions.push('p.stock > 0');
  }

  return {
    whereClause: conditions.length ? `WHERE ${conditions.join(' AND ')}` : '',
    params
  };
};