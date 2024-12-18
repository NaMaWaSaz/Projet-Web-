import jwt from 'jsonwebtoken';
import { getUserById } from '../models/user.js';

export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const authorize = (roles = []) => {
  return async (req, res, next) => {
    try {
      const user = await getUserById(req.user.id);
      
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};