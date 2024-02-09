import React, { useState } from 'react';
import '../Assets/Css/Login.css'
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }
    onLogin({ username, password });
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <br/>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button> <br/><br/>
      <span>Not a member?</span>  <Link to ="/register"> Register</Link>
    </div>
  );
};
export default Login;









