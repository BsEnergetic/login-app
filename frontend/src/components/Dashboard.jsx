import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div className="login-container">
      <h2>Bienvenido, {user.username}!</h2>
      <p>Esta es tu área privada.</p>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Dashboard;
