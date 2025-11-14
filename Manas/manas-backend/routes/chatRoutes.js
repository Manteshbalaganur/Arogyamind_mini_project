const express = require('express');
const { chatHandler } = require('../controllers/chatController');
const { handleChat } = require('../controllers/chatController');

const router = express.Router();

// router.post('/chat', chatHandler);


// POST /api/chat - Handle chat messages
router.post('/', handleChat);


module.exports = router;