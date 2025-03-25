import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import vector from '../images/vector.png';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  const handleStaffLogin = () => {
    navigate("/staff-dashboard");  // Redirect to staff dashboard
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    setIsRegistering(false);
  };

  return (
    <div className="new-login-page">
      <div className="login-form-container">
        <div className="illustration-container">
          <img
            src={vector}
            alt="Login Illustration"
            className="login-illustration"
          />
        </div>
        <div className="form-content">
          {isRegistering ? (
            <form className="login-form" onSubmit={handleRegister}>
              <h1 className="form-title stylish-title">Create an Account</h1>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsRegistering(false)}>
                  Log in
                </a>
              </p>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="extras">
                <label className="remember-me">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="#">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit" className="primary-button">
                Create Account
              </button>
            </form>
          ) : (
            <form className="login-form" onSubmit={handleLogin}>
              <h1 className="form-title stylish-title">Log In</h1>
              <p>
                Don’t have an account?{" "}
                <a href="#" onClick={() => setIsRegistering(true)}>
                  Register
                </a>
              </p>
              <div className="input-field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="extras">
                <label className="remember-me">
                  <input type="checkbox" /> Remember Me
                </label>
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="primary-button">
                Login
              </button>
              <button
                type="button"
                className="secondary-button staff-login-button"
                onClick={handleStaffLogin}
              >
                Login as Staff
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
