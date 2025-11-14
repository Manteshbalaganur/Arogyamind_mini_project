const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const { logger } = require('./utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', chatRoutes);

// Root endpoint
app.get('/', (req, res) => {
  logger.info("Root endpoint accessed");
  res.json({ 
    message: "Arogya AI Chatbot API is running. Use /api/chat to interact.",
    status: "active"
  });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server running on port ${PORT}`);
  console.log(`🚀 ArogyaMind Backend running at http://localhost:${PORT}`);
});