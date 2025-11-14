const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { errorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for production
app.use(cors({
  origin: [
    'https://your-frontend-app.vercel.app', // Your Vercel URL
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true
}));

app.use(express.json());

// Import routes - FIXED: No duplicates
const chatRoutes = require('./routes/chatRoutes');

// Routes
app.use('/api/chat', chatRoutes);

// Root endpoint
app.get('/', (req, res) => {
  logger.info("Root endpoint accessed");
  res.json({ 
    message: "Arogya AI Chatbot API is running. Use /api/chat to interact.",
    status: "active",
    version: "1.0.0"
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'ArogyaMind Backend'
  });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`🚀 ArogyaMind Backend running at http://localhost:${PORT}`);
});
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