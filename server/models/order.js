import db from '../db/db.js';

export const createOrder = (order) => {
  const {
    user_id,
    total_amount,
    shipping_address,
    items
  } = order;

  // Start transaction
  const transaction = db.transaction((order) => {
    // Create order
    const orderStmt = db.prepare(`
      INSERT INTO orders (user_id, total_amount, shipping_address)
      VALUES (?, ?, ?)
      RETURNING id
    `);
    
    const { id: orderId } = orderStmt.get(user_id, total_amount, shipping_address);

    // Insert order items
    const itemStmt = db.prepare(`
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES (?, ?, ?, ?)
    `);

    for (const item of items) {
      itemStmt.run(orderId, item.product_id, item.quantity, item.price);
    }

    // Update product stock
    const updateStockStmt = db.prepare(`
      UPDATE products
      SET stock = stock - ?
      WHERE id = ?
    `);

    for (const item of items) {
      updateStockStmt.run(item.quantity, item.product_id);
    }

    return orderId;
  });

  return transaction(order);
};

export const getOrderById = (id) => {
  const orderStmt = db.prepare(`
    SELECT o.*, json_group_array(
      json_object(
        'id', oi.id,
        'product_id', oi.product_id,
        'quantity', oi.quantity,
        'price', oi.price,
        'product_name', p.name
      )
    ) as items
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    LEFT JOIN products p ON oi.product_id = p.id
    WHERE o.id = ?
    GROUP BY o.id
  `);

  return orderStmt.get(id);
};

export const getUserOrders = (userId) => {
  const stmt = db.prepare(`
    SELECT * FROM orders
    WHERE user_id = ?
    ORDER BY created_at DESC
  `);

  return stmt.all(userId);
};

export const updateOrderStatus = (id, status) => {
  const stmt = db.prepare(`
    UPDATE orders
    SET status = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING *
  `);

  return stmt.get(status, id);
};