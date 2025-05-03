const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL Connection Pool
const pool = new Pool({
  user: 'myuser', // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'login_system',
  password: 'mypassword', // Replace with your PostgreSQL password
  port: 5432
});

// Register Endpoint
app.post('/register', async (req, res) => {
  const { username, email, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, phone, password) VALUES ($1, $2, $3, $4)',
      [username, email, phone, hashedPassword]
    );
    res.status(200).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register user.' });
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.status(200).json({ message: 'Login successful.' });
    } else {
      res.status(400).json({ error: 'Invalid email or password.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error logging in.' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
