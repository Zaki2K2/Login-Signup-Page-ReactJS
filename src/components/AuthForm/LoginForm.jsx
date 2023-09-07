import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate an asynchronous login process (replace with actual login logic)
      await onSubmit(email, password);
      setSubmitted(true);
      setError('');
    } catch (err) {
      setSubmitted(false);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <h2 className="login-form-title">Login</h2>
      {submitted && !error && (
        <p className="success-message">Login successful!</p>
      )}
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-form-input"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-form-input"
          required
        />
      </div>
      <button type="submit" className="login-form-button">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
