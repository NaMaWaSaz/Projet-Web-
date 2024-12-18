// Add to existing init.js, after the reviews table creation

// Create product specifications table
db.exec(`
  CREATE TABLE IF NOT EXISTS product_specifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    label TEXT NOT NULL,
    value TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  )
`);

// Create product variants table
db.exec(`
  CREATE TABLE IF NOT EXISTS product_variants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    sku TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price_adjustment DECIMAL(10,3) DEFAULT 0,
    stock INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  )
`);

// Create product tags table
db.exec(`
  CREATE TABLE IF NOT EXISTS product_tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    slug TEXT UNIQUE NOT NULL
  )
`);

// Create product_tag_relations table
db.exec(`
  CREATE TABLE IF NOT EXISTS product_tag_relations (
    product_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (product_id, tag_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES product_tags(id) ON DELETE CASCADE
  )
`);

// Add full-text search indexes
db.exec(`
  CREATE VIRTUAL TABLE IF NOT EXISTS products_fts USING fts5(
    name,
    description,
    content='products',
    content_rowid='id'
  )
`);

// Create triggers to keep FTS index up to date
db.exec(`
  CREATE TRIGGER IF NOT EXISTS products_ai AFTER INSERT ON products BEGIN
    INSERT INTO products_fts(rowid, name, description)
    VALUES (new.id, new.name, new.description);
  END;
`);