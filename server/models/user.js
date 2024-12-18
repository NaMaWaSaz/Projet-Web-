import db from '../db/db.js';
import bcrypt from 'bcryptjs';

export const createUser = async ({ email, password, name, role = 'user' }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const stmt = db.prepare(`
    INSERT INTO users (email, password, name, role)
    VALUES (?, ?, ?, ?)
    RETURNING id, email, name, role
  `);

  return stmt.get(email, hashedPassword, name, role);
};

export const getUserByEmail = (email) => {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
};

export const getUserById = (id) => {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  return stmt.get(id);
};

export const updateUser = (id, updates) => {
  const { email, name, role } = updates;
  
  const stmt = db.prepare(`
    UPDATE users 
    SET email = ?, name = ?, role = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING id, email, name, role
  `);

  return stmt.get(email, name, role, id);
};