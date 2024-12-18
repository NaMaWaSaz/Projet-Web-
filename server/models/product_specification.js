import db from '../db/db.js';

export const addProductSpecifications = (productId, specifications) => {
  const stmt = db.prepare(`
    INSERT INTO product_specifications (product_id, label, value)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction((specs) => {
    for (const spec of specs) {
      stmt.run(productId, spec.label, spec.value);
    }
  });

  transaction(specifications);
};

export const updateProductSpecifications = (productId, specifications) => {
  const deleteStmt = db.prepare(`
    DELETE FROM product_specifications WHERE product_id = ?
  `);

  const insertStmt = db.prepare(`
    INSERT INTO product_specifications (product_id, label, value)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction((specs) => {
    deleteStmt.run(productId);
    for (const spec of specs) {
      insertStmt.run(productId, spec.label, spec.value);
    }
  });

  transaction(specifications);
};