# CryptoPriceGame API (Node.js + Express + MySQL)

## Setup

1. Copy `.env.example` to `.env` and fill in your MySQL credentials.
2. Run the SQL in `schema.sql` on your MySQL database to create the `users` table.
3. Install dependencies:
   ```bash
   npm install express mysql2 body-parser
   ```
4. Start the server:
   ```bash
   node index.js
   ```

## Endpoints
- `POST /api/register` — Register a new user (`username`, `password`)
- `POST /api/login` — Login (`username`, `password`)
- `POST /api/highscore` — Update high score (`userId`, `score`)
- `GET /api/highscore?userId=...` — Get user's high score

## Vercel Deployment
- Place API files in `/api` for Vercel serverless functions, or deploy as a separate backend.
- Use environment variables for MySQL credentials.
