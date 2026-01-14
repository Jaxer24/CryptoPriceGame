const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbPath = path.join(__dirname, 'database.sqlite');
let db;

(async () => {
  db = await open({ filename: dbPath, driver: sqlite3.Database });
  await db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
  await db.run(`CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    score INTEGER,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
})();

// Register user
app.post('/api/register', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  try {
    const result = await db.run('INSERT INTO users (username) VALUES (?)', username);
    res.status(201).json({ id: result.lastID, username });
  } catch (err) {
    res.status(409).json({ error: 'Username already exists' });
  }
});

// Save score
app.post('/api/scores', async (req, res) => {
  const { user_id, score } = req.body;
  if (!user_id || typeof score !== 'number') return res.status(400).json({ error: 'user_id and score required' });
  await db.run('INSERT INTO scores (user_id, score) VALUES (?, ?)', user_id, score);
  res.status(201).json({ message: 'Score saved' });
});

// Get leaderboard
app.get('/api/leaderboard', async (req, res) => {
  const rows = await db.all(`SELECT users.username, MAX(scores.score) as highscore
    FROM scores
    JOIN users ON scores.user_id = users.id
    GROUP BY users.id
    ORDER BY highscore DESC
    LIMIT 10`);
  res.json(rows);
});

// Login user
app.post('/api/login', async (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  const user = await db.get('SELECT id, username FROM users WHERE username = ?', username);
  if (!user) return res.status(401).json({ error: 'Invalid username' });
  // Optionally, you can add password support here
  // For now, just return user info
  // Get user's highscore
  const scoreRow = await db.get('SELECT MAX(score) as highscore FROM scores WHERE user_id = ?', user.id);
  res.json({ userId: user.id, username: user.username, highscore: scoreRow?.highscore || 0 });
});

app.get('/', (req, res) => res.send('API running'));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`API server running on port ${port}`));
