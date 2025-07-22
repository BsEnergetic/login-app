import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (credentials) => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();
    if (response.ok) {
      setUser({ username: credentials.username });
    } else {
      alert(data.message);
    }
  };

  const handleRegister = async (credentials) => {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });

    const data = await response.json();
    if (response.ok) {
      alert('Usuario creado correctamente, ahora inicia sesión.');
      setIsRegistering(false);
    } else {
      alert(data.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : isRegistering ? (
        <RegisterForm onRegister={handleRegister} onBackToLogin={() => setIsRegistering(false)} />
      ) : (
        <LoginForm onLogin={handleLogin} onRegister={() => setIsRegistering(true)} />
      )}
    </>
  );
}

export default App;
