import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useUserAuthContext } from './contexts/UserAuthContextProvider';

function App() {
  const [count, setCount] = useState(0);

  const { token, setToken } = useUserAuthContext();

  useEffect(() => {
    console.log(import.meta.env.VITE_AUTH_API_URL);
  }, []);

  const connectToApi = async () => {
    // Make API requests to / - the default route
    const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/`);

    const data = await response.json();
    console.log(data);
  };

  const postUserLogin = async () => {
    let userDetails = {
      username: 'flin',
      password: '123456',
    };
    let response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    let data = await response.json();
    console.log(data);

    setToken(data.token);
  };

  return (
    <>
      <div>
        {/* If we get a value here, means we correctly made the API request */}
        <h1 data-testid="jwt-header">{token}</h1>
        <button onClick={connectToApi}>
          API Connection Check
        </button>
        <button data-testid="login-button" onClick={postUserLogin}>
          Login User
        </button>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="counterButton" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
