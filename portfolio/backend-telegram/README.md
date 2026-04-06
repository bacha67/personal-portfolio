# Backend Telegram

Small Express API that receives portfolio contact form submissions and forwards them to a Telegram bot.

## Setup

1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env`
3. Fill in:
   - `BOT_TOKEN`
   - `CHAT_ID`
   - `FRONTEND_URL` as a comma-separated list when needed, for example `http://localhost:3000,http://localhost:3001`
4. Start the server:
   `npm run dev`

## Endpoints

- `GET /health`
- `POST /send-message`
