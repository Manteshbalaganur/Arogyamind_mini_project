// const { spawn } = require('child_process');
// const { logger } = require('../utils/logger');

// // Enhanced response templates with emojis and Gen Z language
// const responseTemplates = {
//   overwhelmed: {
//     type: 'formatted',
//     content: {
//       greeting: "Hey! 👋 I see you're in the grind 😮‍💨",
//       mainMessage: "Too much work + tight deadlines = major overwhelm vibes 😅 Let's tackle this together!",
//       sections: [
//         {
//           title: "🚀 Game Plan (No Cap)",
//           points: [
//             "📝 Brain dump EVERYTHING - get it out of your head",
//             "🎯 Pick just 3 must-do tasks (be fr, what REALLY matters?)",
//             "⏰ Try the 25-5 rule: 25 mins work, 5 mins vibe check",
//             "🍅 Tomato timer? More like slay-timer 💅"
//           ]
//         },
//         {
//           title: "💫 Mindset Glow-Up",
//           points: [
//             "Progress > perfection every single time 🙌",
//             "You've survived 100% of your bad days so far 👑",
//             "Small wins count too - celebrate them! 🎉",
//             "This feeling is temporary, you got this 💪"
//           ]
//         }
//       ],
//       quote: "✨ \"You don't have to be great to start, but you have to start to be great\" - Zig Ziglar",
//       prompt: "Wanna break down your tasks together? I'm your accountability buddy! 🤝"
//     }
//   },

//   anxiety: {
//     type: 'formatted',
//     content: {
//       greeting: "I see you, anxiety's being loud today 😔🫂",
//       mainMessage: "When the anxiety hits, everything feels like too much. Let's ground ourselves, bestie 💖",
//       sections: [
//         {
//           title: "🌎 Grounding Exercise (5-4-3-2-1 Method)",
//           points: [
//             "👀 5 things you can see around you",
//             "✋ 4 things you can touch (phone, clothes, etc)",
//             "👂 3 things you can hear right now", 
//             "👃 2 things you can smell (or like the smell of)",
//             "💖 1 thing you love about yourself"
//           ]
//         },
//         {
//           title: "🆘 Quick Calm Tools",
//           points: [
//             "🌬️ Box breathing: 4 sec in, 4 sec hold, 4 sec out",
//             "🎵 Put on your comfort playlist ASAP",
//             "💦 Splash cold water on your face - instant reset",
//             "📱 Text someone who gets it (or me! 👋)"
//           ]
//         }
//       ],
//       quote: "🌤️ \"This storm will pass. Remember to breathe\" - Unknown",
//       prompt: "Ready to try the 5-4-3-2-1 method with me? Let's do it step by step! 🥰"
//     }
//   },

//   sad: {
//     type: 'formatted',
//     content: {
//       greeting: "Sending you virtual hugs rn 🫂💙",
//       mainMessage: "Feeling down is rough, but you showing up here is already a W 🏆",
//       sections: [
//         {
//           title: "🌻 Gentle Reminders (No Toxic Positivity)",
//           points: [
//             "Your feelings are valid AF 💯",
//             "Healing isn't linear - some days just hit different 📉📈",
//             "Resting IS productive when you're struggling 🛌",
//             "You matter, even on your lowest days ✨"
//           ]
//         },
//         {
//           title: "🍵 Cozy Comfort Ideas",
//           points: [
//             "☕ Your fave warm drink + comfort show marathon",
//             "📓 Journal it out (or voice memo if typing's too much)",
//             "🌿 Quick walk outside - fresh air does wonders",
//             "🎨 Doodle, color, or create something - no pressure"
//           ]
//         }
//       ],
//       quote: "💫 \"It's okay to not be okay. Just don't give up\" - Unknown",
//       prompt: "Want to share what's weighing heavy? I'm all ears 👂💙"
//     }
//   },

//   stressed: {
//     type: 'formatted', 
//     content: {
//       greeting: "Stress mode: activated 😫 I get it!",
//       mainMessage: "When everything feels like too much, let's hit pause and reset 🎮",
//       sections: [
//         {
//           title: "🆘 Emergency Stress First Aid",
//           points: [
//             "💨 Take 3 DEEP breaths - like, actually do it rn",
//             "🚶‍♂️ Change your scenery for 5 mins",
//             "🎧 Noise canceling mode + lo-fi beats",
//             "💆 Quick shoulder/neck massage (you deserve it)"
//           ]
//         },
//         {
//           title: "🎯 Stress Hack Attack",
//           points: [
//             "Break tasks into 'one-thing-at-a-time' chunks",
//             "Set boundaries - 'no' is a complete sentence 🙅‍♀️",
//             "Hydrate! Water > stress, facts only 💧",
//             "Celebrate micro-wins like a boss 🥳"
//           ]
//         }
//       ],
//       prompt: "Which stress hack do you wanna try first? I'll walk you through it! 🤗"
//     }
//   },

//   sleep: {
//     type: 'formatted',
//     content: {
//       greeting: "Hey! 😴 Sleep struggles are real, but we got this! 💪",
//       mainMessage: "Improving sleep is a game-changer for your mental health! Let's build some killer sleep habits together 🌙",
//       sections: [
//         {
//           title: "🕒 Consistent Sleep Schedule",
//           points: [
//             "Same bedtime & wake-up time EVERY day (yes, weekends too! 📅)",
//             "Your body loves routine - it regulates your internal clock ⏰",
//             "Aim for 7-9 hours of quality ZZZ's 💤"
//           ]
//         },
//         {
//           title: "🌙 Sleep Sanctuary Setup",
//           points: [
//             "Dark room = blackout curtains or sleep mask 🌑",
//             "Cool temp (65-68°F is the sweet spot) ❄️",
//             "Quiet space or white noise machine 🔇",
//             "Comfy mattress & pillows = non-negotiable 🛏️"
//           ]
//         },
//         {
//           title: "📱 Pre-Bed Rituals",
//           points: [
//             "No screens 1 hour before bed (blue light = sleep enemy) 📵",
//             "Warm bath or shower 90 mins before sleep 🛁",
//             "Reading (real books, not e-books!) 📚",
//             "Gentle stretching or meditation 🧘‍♀️"
//           ]
//         },
//         {
//           title: "🍎 Food & Drink Rules",
//           points: [
//             "No caffeine after 2 PM ☕",
//             "Avoid heavy meals 3 hours before bed 🍔",
//             "Light sleep-friendly snacks: banana, milk, almonds 🍌",
//             "Stay hydrated but limit liquids before bed 💧"
//           ]
//         }
//       ],
//       quote: "✨ \"Sleep is the best meditation\" - Dalai Lama",
//       prompt: "Which sleep tip do you wanna try first? I'll help you make it a habit! 🌟"
//     }
//   },

//   general: {
//     type: 'formatted',
//     content: {
//       greeting: "Hey bestie! 👋 Welcome back!",
//       mainMessage: "I'm Manas, your mental health sidekick 💙 How's your soul feeling today?",
//       sections: [
//         {
//           title: "🎮 Quick Check-In Options",
//           points: [
//             "😊 Managing pretty well, just checking in",
//             "😟 Something's bothering me, need to vent", 
//             "😰 Stressed/anxious and need coping tools",
//             "😔 Feeling down and could use some support"
//           ]
//         }
//       ],
//       prompt: "Where you at today? No judgment, just vibes 💫"
//     }
//   },

//   default: {
//     type: 'formatted',
//     content: {
//       mainMessage: "I'm here to listen and support you. Could you tell me a bit more about what's going on?",
//       prompt: "No pressure, just share what feels comfortable 💫"
//     }
//   }
// };

// // Improved intent detection with more Gen Z terms
// const detectIntent = (userMessage) => {
//   const message = userMessage.toLowerCase();
  
//   // Sleep detection
//   if (message.includes('sleep') || message.includes('insomnia') || 
//       message.includes('tired') || message.includes('exhausted') ||
//       message.includes('can\'t sleep') || message.includes('wake up') ||
//       message.includes('bedtime') || message.includes('restless') ||
//       message.includes('sleeping habit')) {
//     return 'sleep';
//   }
  
//   // Overwhelmed/Work stress
//   else if (message.includes('overwhelm') || message.includes('too much work') || 
//       message.includes('deadline') || message.includes('stress') || 
//       message.includes('busy') || message.includes('pressure') ||
//       message.includes('workload') || message.includes('too much to do') ||
//       message.includes('drowning') || message.includes('behind') ||
//       message.includes('grind') || message.includes('burnout')) {
//     return 'overwhelmed';
//   }
  
//   // Anxiety
//   else if (message.includes('anxious') || message.includes('anxiety') || 
//            message.includes('panic') || message.includes('nervous') ||
//            message.includes('worried') || message.includes('scared') ||
//            message.includes('overthink') || message.includes('racing thoughts') ||
//            message.includes('can\'t calm') || message.includes('freaking out')) {
//     return 'anxiety';
//   }
  
//   // Sad/Depressed
//   else if (message.includes('sad') || message.includes('depress') || 
//            message.includes('down') || message.includes('unhappy') ||
//            message.includes('low') || message.includes('hopeless') ||
//            message.includes('empty') || message.includes('crying') ||
//            message.includes('numb') || message.includes('can\'t get up')) {
//     return 'sad';
//   }
  
//   // Stressed
//   else if (message.includes('stressed') || message.includes('tension') ||
//            message.includes('pressure') || message.includes('frazzled') ||
//            message.includes('wired') || message.includes('tense')) {
//     return 'stressed';
//   }
  
//   // Greeting/General
//   else if (message.includes('hi') || message.includes('hello') || 
//            message.includes('hey') || message.includes('what\'s up') ||
//            message.includes('sup') || message.includes('how are you') ||
//            message.length < 10) {
//     return 'general';
//   }
  
//   return 'default';
// };

// // Function to format AI response based on intent
// const formatAIResponse = (aiResponse, userMessage) => {
//   const intent = detectIntent(userMessage);
//   const template = JSON.parse(JSON.stringify(responseTemplates[intent] || responseTemplates.default));
  
//   return template;
// };

// const chatHandler = async (req, res) => {
//   try {
//     const { message, timestamp } = req.body;
//     logger.debug(`Received request: ${JSON.stringify(req.body)}`);

//     if (!message) {
//       logger.warning("No message provided in request");
//       return res.status(400).json({ error: "No message provided" });
//     }

//     // 🎯 CRITICAL: Generate formatted response FIRST
//     const formattedResponse = formatAIResponse("", message);
    
//     console.log('=== FORMATTED RESPONSE GENERATED ===');
//     console.log('User message:', message);
//     console.log('Detected intent:', detectIntent(message));
//     console.log('Formatted response ready to send');
    
//     // 🎯 TEMPORARY: IGNORE Python AI completely and send formatted response
//     res.json({
//       response: formattedResponse,  // Formatted response as primary
//       reply: formattedResponse,     // Formatted response for frontend
//       alert: null,
//       timestamp: timestamp || new Date().toISOString()
//     });

//     // 🚨 COMMENT OUT THE PYTHON CODE FOR NOW - we'll add it back later
//     return;

//     // --- BELOW CODE IS COMMENTED OUT TEMPORARILY ---
//     /*
//     // Call Python AI model
//     const pythonProcess = spawn('python', [
//       './python_scripts/inference.py',
//       JSON.stringify({ message, timestamp })
//     ]);

//     let result = '';
//     let error = '';

//     pythonProcess.stdout.on('data', (data) => {
//       result += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       error += data.toString();
//     });

//     pythonProcess.on('close', (code) => {
//       if (code !== 0) {
//         logger.error(`Python process error: ${error}`);
//         return res.status(500).json({ error: "AI model processing failed" });
//       }

//       try {
//         const parsedResult = JSON.parse(result);
//         logger.debug(`AI Response: ${JSON.stringify(parsedResult)}`);
        
//         // 🎯 IGNORE Python response and use formatted template
//         res.json({
//           response: formattedResponse,  // Formatted response as primary
//           reply: formattedResponse,     // Formatted response for frontend
//           alert: parsedResult.alert,
//           timestamp: timestamp || new Date().toISOString()
//         });
        
//       } catch (parseError) {
//         logger.error(`Parse error: ${parseError}`);
//         // Send formatted response even if parsing fails
//         res.json({
//           response: formattedResponse,
//           reply: formattedResponse,
//           alert: null,
//           timestamp: new Date().toISOString()
//         });
//       }
//     });
//     */

//   } catch (error) {
//     logger.error(`Error processing request: ${error.message}`);
//     // Send error response in formatted format
//     const errorResponse = {
//       type: 'formatted',
//       content: {
//         mainMessage: "I'm having some technical difficulties right now. Please try again in a moment!",
//         prompt: "Your message is important to me 💙"
//       }
//     };
//     res.status(500).json({ 
//       error: error.message,
//       reply: errorResponse,
//       response: errorResponse
//     });
//   }
// };

// module.exports = { chatHandler };

// const { spawn } = require('child_process');
// const { logger } = require('../utils/logger');

// const chatHandler = async (req, res) => {
//   try {
//     const { message, timestamp } = req.body;
//     logger.debug(`Received request: ${JSON.stringify(req.body)}`);

//     if (!message) {
//       logger.warning("No message provided in request");
//       return res.status(400).json({ error: "No message provided" });
//     }

//     // Call Python AI model
//     const pythonProcess = spawn('python', [
//       './python_scripts/inference.py',
//       JSON.stringify({ message, timestamp })
//     ]);

//     let result = '';
//     let error = '';

//     pythonProcess.stdout.on('data', (data) => {
//       result += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       error += data.toString();
//     });

//     pythonProcess.on('close', (code) => {
//       if (code !== 0) {
//         logger.error(`Python process error: ${error}`);
        
//         // 🎯 SIMPLE FALLBACK: If Python fails, return basic response
//         const fallbackResponse = `I understand you're saying: "${message}". I'm here to help and support you through whatever you're going through. Could you tell me a bit more about how you're feeling?`;
        
//         res.json({
//           response: fallbackResponse,
//           alert: null,
//           timestamp: timestamp
//         });
//         return;
//       }

//       try {
//         const parsedResult = JSON.parse(result);
//         logger.debug(`Response: ${JSON.stringify(parsedResult)}`);
        
//         res.json({
//           response: parsedResult.response,
//           alert: parsedResult.alert,
//           timestamp: timestamp
//         });
//       } catch (parseError) {
//         logger.error(`Parse error: ${parseError}`);
        
//         // 🎯 FALLBACK: If parsing fails, return basic response
//         const fallbackResponse = `Thanks for sharing: "${message}". I'm listening and here to support you. How can I help you feel better?`;
        
//         res.json({
//           response: fallbackResponse,
//           alert: null,
//           timestamp: timestamp
//         });
//       }
//     });

//   } catch (error) {
//     logger.error(`Error processing request: ${error.message}`);
    
//     // 🎯 FALLBACK: If everything fails
//     res.json({
//       response: "I'm here to help and support you. Please tell me what's on your mind.",
//       alert: null,
//       timestamp: new Date().toISOString()
//     });
//   }
// };

// module.exports = { chatHandler };


// final version without fallback mechanism
// const { spawn } = require('child_process');
// const { logger } = require('../utils/logger');

// const chatHandler = async (req, res) => {
//   try {
//     const { message, timestamp } = req.body;

//     if (!message) {
//       return res.status(400).json({ error: "No message provided" });
//     }

//     // Call Python AI model
//     const pythonProcess = spawn('python', [
//       './python_scripts/inference.py',
//       JSON.stringify({ message, timestamp })
//     ]);

//     let result = '';
//     let error = '';

//     pythonProcess.stdout.on('data', (data) => {
//       result += data.toString();
//     });

//     pythonProcess.stderr.on('data', (data) => {
//       error += data.toString();
//     });

//     pythonProcess.on('close', (code) => {
//       if (code !== 0) {
//         // If Python fails, return error but don't use fallback
//         return res.status(500).json({ 
//           error: "AI model not available",
//           details: "Python dependencies missing on server"
//         });
//       }

//       try {
//         const parsedResult = JSON.parse(result);
//         res.json({
//           response: parsedResult.response,
//           alert: parsedResult.alert,
//           timestamp: timestamp
//         });
//       } catch (parseError) {
//         res.status(500).json({ error: "Failed to parse AI response" });
//       }
//     });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = { chatHandler };

// controllers/chatController.js - TEMPORARY TEST VERSION
const chatHandler = async (req, res) => {
  try {
    console.log('📨 Received chat request:', req.body);
    
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ 
        success: false,
        error: "No message provided" 
      });
    }

    // Simple test response - no Python dependency
    const testResponse = {
      success: true,
      response: `I received your message: "${message}". This is a test response from the server.`,
      alert: false,
      timestamp: new Date().toISOString()
    };

    console.log('✅ Sending test response');
    res.json(testResponse);
    
  } catch (error) {
    console.error('❌ Chat handler error:', error);
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
};

module.exports = { chatHandler };