// Add to existing index.js

// Import new routes
import searchRoutes from './routes/search.js';

// Add search routes
app.use('/api/search', searchRoutes);