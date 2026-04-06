require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = Number(process.env.PORT || 5000);
const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const allowedOrigins = new Set([
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
  ...String(process.env.FRONTEND_URL || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
]);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`Origin ${origin} is not allowed by CORS`));
  },
}));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!TOKEN || !CHAT_ID) {
    return res.status(500).json({
      success: false,
      error: 'Server is missing BOT_TOKEN or CHAT_ID',
    });
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required',
    });
  }

  const text = [
    'New portfolio message',
    `Name: ${String(name).trim()}`,
    `Email: ${String(email).trim()}`,
    `Message: ${String(message).trim()}`,
  ].join('\n');

  try {
    await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    const telegramError = error.response?.data || error.message;

    return res.status(500).json({
      success: false,
      error: 'Failed to send Telegram message',
      details: telegramError,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Telegram backend running on port ${PORT}`);
});
