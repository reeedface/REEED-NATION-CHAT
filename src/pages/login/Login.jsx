import React, { useState } from 'react';
import './login.css';
import assets from '../../assets/assets';
import bg_video from '../../assets/background.mp4';
import { signup, login } from '../../config/firebase';

const Login = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currState === "Sign Up") {
      // Sign up the user
      await signup(username, email, password);
    } else {
      // Log in the user
      await login(email, password);
    }
  };

  return (
    <div className='login'>
      <video className="bg_video" autoPlay muted loop>
        <source src={bg_video} type="video/mp4" />
      </video>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{currState}</h2>
        {currState === "Sign Up" && (
          <input
            type="text"
            placeholder='Username'
            className="form-input"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder='Email address'
          className="form-input"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          className="form-input"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-button">
          {currState === "Sign Up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">Agree to the terms of use & privacy policy.</label>
        </div>
        <div className="login-forget">
          {currState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account? <span onClick={() => setCurrState("Login")}>Click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
