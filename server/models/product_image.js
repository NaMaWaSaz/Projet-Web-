import db from '../db/db.js';

export const addProductImages = (productId, images) => {
  const stmt = db.prepare(`
    INSERT INTO product_images (product_id, image_url, is_primary)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction((imgs) => {
    imgs.forEach((img, index) => {
      stmt.run(productId, img.url, index === 0 ? 1 : 0);
    });
  });

  transaction(images);
};

export const updateProductImages = (productId, images) => {
  const deleteStmt = db.prepare(`
    DELETE FROM product_images WHERE product_id = ?
  `);

  const insertStmt = db.prepare(`
    INSERT INTO product_images (product_id, image_url, is_primary)
    VALUES (?, ?, ?)
  `);

  const transaction = db.transaction((imgs) => {
    deleteStmt.run(productId);
    imgs.forEach((img, index) => {
      insertStmt.run(productId, img.url, index === 0 ? 1 : 0);
    });
  });

  transaction(images);
};

export const setPrimaryImage = (productId, imageId) => {
  const transaction = db.transaction(() => {
    // Reset all images to non-primary
    db.prepare(`
      UPDATE product_images
      SET is_primary = 0
      WHERE product_id = ?
    `).run(productId);

    // Set the selected image as primary
    db.prepare(`
      UPDATE product_images
      SET is_primary = 1
      WHERE id = ? AND product_id = ?
    `).run(imageId, productId);
  });

  transaction();
};