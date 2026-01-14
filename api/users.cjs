const dbPromise = require('./db.cjs');

// Register a new user
exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Missing fields' });
  try {
    const db = await dbPromise;
    const row = await db.get('SELECT id FROM users WHERE username = ?', username);
    if (row) return res.status(409).json({ error: 'User exists' });
    await db.run('INSERT INTO users (username, password, highscore) VALUES (?, ?, 0)', username, password);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const db = await dbPromise;
    const row = await db.get('SELECT id, highscore FROM users WHERE username = ? AND password = ?', username, password);
    if (!row) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ userId: row.id, highscore: row.highscore });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Update high score
exports.updateHighscore = async (req, res) => {
  const { userId, score } = req.body;
  try {
    const db = await dbPromise;
    await db.run('UPDATE users SET highscore = MAX(highscore, ?) WHERE id = ?', score, userId);
    res.json({ message: 'Highscore updated' });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

// Get user high score
exports.getHighscore = async (req, res) => {
  const { userId } = req.query;
  try {
    const db = await dbPromise;
    const row = await db.get('SELECT highscore FROM users WHERE id = ?', userId);
    if (!row) return res.status(404).json({ error: 'User not found' });
    res.json({ highscore: row.highscore });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};
