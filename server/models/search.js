import db from '../db/db.js';
import { buildSearchQuery } from '../utils/searchUtils.js';

export const searchProducts = ({
  query,
  filters = {},
  sortBy = 'newest',
  page = 1,
  limit = 20
}) => {
  const offset = (page - 1) * limit;
  const { whereClause, params } = buildSearchQuery(query, filters);

  // Determine sort order
  let orderClause = 'ORDER BY p.created_at DESC'; // default sorting
  switch (sortBy) {
    case 'price_asc':
      orderClause = 'ORDER BY p.price ASC';
      break;
    case 'price_desc':
      orderClause = 'ORDER BY p.price DESC';
      break;
    case 'rating':
      orderClause = 'ORDER BY p.rating DESC, p.reviews_count DESC';
      break;
  }

  // Main query
  const stmt = db.prepare(`
    SELECT 
      p.*,
      c.name as category_name,
      c.slug as category_slug,
      u.name as seller_name,
      (
        SELECT json_group_array(json_object(
          'url', pi.image_url,
          'is_primary', pi.is_primary
        ))
        FROM product_images pi
        WHERE pi.product_id = p.id
      ) as images,
      (
        SELECT json_group_array(json_object(
          'label', ps.label,
          'value', ps.value
        ))
        FROM product_specifications ps
        WHERE ps.product_id = p.id
      ) as specifications
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN users u ON p.seller_id = u.id
    ${whereClause}
    ${orderClause}
    LIMIT ? OFFSET ?
  `);

  // Count query for pagination
  const countStmt = db.prepare(`
    SELECT COUNT(*) as total
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    ${whereClause}
  `);

  const products = stmt.all(...params, limit, offset);
  const { total } = countStmt.get(...params);

  return {
    products: products.map(product => ({
      ...product,
      images: JSON.parse(product.images || '[]'),
      specifications: JSON.parse(product.specifications || '[]')
    })),
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
};