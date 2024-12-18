import db from '../db/db.js';

export const createProduct = (product) => {
  const {
    name,
    description,
    price,
    stock,
    category_id,
    seller_id,
  } = product;

  const stmt = db.prepare(`
    INSERT INTO products (
      name, description, price, stock, category_id, seller_id
    )
    VALUES (?, ?, ?, ?, ?, ?)
    RETURNING *
  `);

  return stmt.get(name, description, price, stock, category_id, seller_id);
};

export const getProducts = ({ 
  category_id, 
  seller_id, 
  limit = 20, 
  offset = 0,
  sort = 'created_at',
  order = 'desc'
}) => {
  let query = `
    SELECT p.*, c.name as category_name, 
           (SELECT image_url FROM product_images WHERE product_id = p.id AND is_primary = 1) as image_url
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    WHERE 1=1
  `;
  
  const params = [];

  if (category_id) {
    query += ' AND category_id = ?';
    params.push(category_id);
  }

  if (seller_id) {
    query += ' AND seller_id = ?';
    params.push(seller_id);
  }

  query += ` ORDER BY ${sort} ${order} LIMIT ? OFFSET ?`;
  params.push(limit, offset);

  const stmt = db.prepare(query);
  return stmt.all(...params);
};

export const getProductById = (id) => {
  const stmt = db.prepare(`
    SELECT p.*, c.name as category_name,
           json_group_array(pi.image_url) as images
    FROM products p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id
    WHERE p.id = ?
    GROUP BY p.id
  `);

  return stmt.get(id);
};

export const updateProduct = (id, updates) => {
  const {
    name,
    description,
    price,
    stock,
    category_id
  } = updates;

  const stmt = db.prepare(`
    UPDATE products
    SET name = ?,
        description = ?,
        price = ?,
        stock = ?,
        category_id = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING *
  `);

  return stmt.get(name, description, price, stock, category_id, id);
};

export const deleteProduct = (id) => {
  const stmt = db.prepare('DELETE FROM products WHERE id = ?');
  return stmt.run(id);
};