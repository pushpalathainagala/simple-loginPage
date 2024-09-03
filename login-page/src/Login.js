import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Username: " + username + ", Password: " + password);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '8px', margin: '8px 0', fontSize: '16px' }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '8px', margin: '8px 0', fontSize: '16px' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', fontSize: '16px', marginTop: '10px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;