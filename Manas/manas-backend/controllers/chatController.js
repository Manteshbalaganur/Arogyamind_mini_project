const { spawn } = require('child_process');
const { logger } = require('../utils/logger');

const chatHandler = async (req, res) => {
  try {
    const { message, timestamp } = req.body;
    logger.debug(`Received request: ${JSON.stringify(req.body)}`);

    if (!message) {
      logger.warning("No message provided in request");
      return res.status(400).json({ error: "No message provided" });
    }

    // Call Python AI model
    const pythonProcess = spawn('python', [
      './python_scripts/inference.py',
      JSON.stringify({ message, timestamp })
    ]);

    let result = '';
    let error = '';

    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      error += data.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        logger.error(`Python process error: ${error}`);
        return res.status(500).json({ error: "AI model processing failed" });
      }

      try {
        const parsedResult = JSON.parse(result);
        logger.debug(`Response: ${JSON.stringify(parsedResult)}`);
        
        res.json({
          response: parsedResult.response,
          alert: parsedResult.alert,
          timestamp: timestamp
        });
      } catch (parseError) {
        logger.error(`Parse error: ${parseError}`);
        res.status(500).json({ error: "Failed to parse AI response" });
      }
    });

  } catch (error) {
    logger.error(`Error processing request: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { chatHandler };