# Portfolio Deployment Guide

This repo already contains a separated frontend and backend:

- `portfolio/frontend_react` -> deploy this to Netlify
- `portfolio/backend-telegram` -> deploy this to Railway

You do not need to split the GitHub repository to host them on different platforms. Each platform can deploy a different subdirectory from the same repo.

## Netlify

This repo now includes a root `netlify.toml` so Netlify builds only the React app.

Use these settings:

- Base directory: `portfolio/frontend_react`
- Build command: `npm run build`
- Publish directory: `build`

Set this environment variable in Netlify:

- `REACT_APP_API_URL=https://YOUR-RAILWAY-BACKEND.up.railway.app`

## Railway

Create a Railway service from the same GitHub repo, then set the service root directory to:

- `portfolio/backend-telegram`

Railway should run the backend with the existing script:

- Start command: `npm start`

Set these environment variables in Railway:

- `BOT_TOKEN=your_telegram_bot_token`
- `CHAT_ID=your_telegram_chat_id`
- `FRONTEND_URL=https://YOUR-NETLIFY-SITE.netlify.app`

If you later attach a custom frontend domain, add it to `FRONTEND_URL` too. Multiple origins are supported as a comma-separated list.

Example:

```env
FRONTEND_URL=https://my-portfolio.netlify.app,https://www.myportfolio.com
```

## Deployment Order

1. Deploy the backend to Railway first.
2. Copy the Railway public URL.
3. Add that URL to Netlify as `REACT_APP_API_URL`.
4. Deploy the frontend to Netlify.
5. Add the final Netlify URL back into Railway as `FRONTEND_URL`.

## Notes

- The frontend contact form sends requests to `REACT_APP_API_URL/send-message`.
- The backend already includes CORS handling and a `/health` endpoint.
- Netlify SPA redirects are configured in `netlify.toml`.
