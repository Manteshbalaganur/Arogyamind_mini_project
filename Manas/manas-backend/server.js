const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS - Allow everything temporarily
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors());

// Body parsing
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log('📍', new Date().toISOString(), req.method, req.path, '- Origin:', req.headers.origin);
  next();
});

// Routes
app.use('/api/chat', chatRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: "🚀 Arogya AI Chatbot API is running!",
    status: "active",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false,
    error: `Route ${req.originalUrl} not found` 
  });
});

// Global error handler - IMPORTANT: This ensures CORS headers on errors
app.use((error, req, res, next) => {
  console.error('💥 Global error handler:', error);
  
  // Ensure CORS headers even on errors
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    message: error.message
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`✅ CORS enabled for all origins`);
});
//final
// const express = require('express');
// const cors = require('cors');
// const chatRoutes = require('./routes/chatRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // 🎯 TEMPORARY: Allow ALL origins for debugging
// app.use(cors({
//   origin: true, // This allows ANY origin
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Explicit preflight handling
// app.options('*', cors());

// app.use(express.json());

// // Routes
// app.use('/api/chat', chatRoutes);

// // Root endpoint
// app.get('/', (req, res) => {
//   res.json({ 
//     message: "Arogya AI Chatbot API is running. Use /api/chat to interact.",
//     status: "active",
//     cors: "enabled-for-all-origins"
//   });
// });

// // Add logging to see incoming requests
// app.use((req, res, next) => {
//   console.log('📨 Incoming request:', {
//     method: req.method,
//     path: req.path,
//     origin: req.headers.origin,
//     timestamp: new Date().toISOString()
//   });
//   next();
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Server running on port ${PORT}`);
//   console.log(`✅ CORS enabled for ALL origins`);
// });

// Manas/manas-backend/wroking
// const express = require('express');
// const cors = require('cors');
// const chatRoutes = require('./routes/chatRoutes');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // 🎯 FIXED CORS - Allow all Vercel domains
// app.use(cors({
//   origin: [
//     'https://arogyamind-mini-project-3laq.vercel.app',
//     'https://arogyamind-mini-project-3-git-.*-manteshbalaganurs-projects.vercel.app', // Preview URLs
//     'https://arogyamind-mini-project-.*.vercel.app', // All Vercel subdomains
//     'http://localhost:8080',
//     'http://localhost:3000', 
//     'http://localhost:5173'
//   ],
//   methods: ['GET', 'POST', 'OPTIONS'],
//   credentials: true,
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// }));

// // Handle preflight requests
// app.options('*', cors());

// app.use(express.json());

// // Routes
// app.use('/api/chat', chatRoutes);

// // Root endpoint
// app.get('/', (req, res) => {
//   res.json({ 
//     message: "Arogya AI Chatbot API is running. Use /api/chat to interact.",
//     status: "active"
//   });
// });

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const chatRoutes = require('./routes/chatRoutes');
// const { errorHandler } = require('./middlewares/errorHandler');
// const { logger } = require('./utils/logger');
// const chatRoutes = require('./routes/chat');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;


// // Middleware
// app.use(cors());
// app.use(express.json());

// // CORS configuration for production
// app.use(cors({
//   origin: [
//     'https://your-vercel-app.vercel.app',
//     'http://localhost:3000',
//     'http://localhost:5173' // Vite default
//   ],
//   credentials: true
// }));

// // Routes
// // app.use('/api', chatRoutes);
// app.use('/api/chat', chatRoutes);

// // Root endpoint
// app.get('/', (req, res) => {
//   logger.info("Root endpoint accessed");
//   res.json({ 
//     message: "Arogya AI Chatbot API is running. Use /api/chat to interact.",
//     status: "active"
//   });
// });

// // Error handling middleware
// app.use(errorHandler);

// app.listen(PORT, '0.0.0.0', () => {
//   logger.info(`Server running on port ${PORT}`);
//   console.log(`🚀 ArogyaMind Backend running at http://localhost:${PORT}`);
// });