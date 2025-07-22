import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  if (existing.length > 0) {
    return res.status(400).json({ message: 'El usuario ya existe' });
  }

  await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
  res.json({ message: 'Usuario registrado correctamente' });
});
