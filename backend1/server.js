const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'fbdesk'
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release(); 
});

app.post('/register', (req, res) => {
  console.log("in registerUser controller");
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email, and password' });
  }

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, password];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error registering user:', err.message);
      return res.status(500).json({ message: 'Error registering user' });
    }
    console.log('User registered successfully');
    res.json({ message: 'Registration successful' });
  });
});

app.post('/login', (req, res) => {
  console.log("in post method");
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const sql = 'SELECT * FROM users WHERE email=? AND password=?';
  const values = [email, password];

  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error during login:', err.message);
      return res.status(500).json({ message: 'Error during login' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});