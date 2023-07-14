import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (username === 'eliaspower' && password === 'cicalino') {
      setLoading(true);

      
    new Promise((res) => setTimeout(res, 1000)).then(() => {
        handleLogin();
      });
    } else {
      setAttempts(attempts + 1);

      if (attempts >= 2) {
        setErrorMessage('Tentativi massimi superati. Riprova più tardi.');
      } else {
        setErrorMessage('Credenziali errate. Riprova.');
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <img src="loader.gif" alt="Loading..." />
          <p>Accesso in corso...</p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
};

const AdminPanel = ({ username }) => {
  return <p>Sei loggato {username}!</p>;
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Sistema di Login</h1>
      {isLoggedIn ? (
        <AdminPanel username="eliaspower" />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;