import React, { useState } from 'react';
import '../Assets/Css/Login.css';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Register = ({ onRegister }) => {
    const  navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    if (!username || !password || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Make an HTTP POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/users/', {
        username,
        password,
        phone,
      });

     
      const responseData = response.data;

      // Call the onRegister function with the received data
      onRegister(responseData);
    } catch (error) {
      // Handle error, for example, display an error message
      console.error('Error during registration:', error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="register-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="register-input"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        className="register-input"
      />
      <button onClick={handleRegister} className="register-button">
        Register
      </button>{' '}
      <br /> <br />
      <span> Already a member? </span> <Link to="/login"> Login Now</Link>
    </div>
  );
};

export default Register;
