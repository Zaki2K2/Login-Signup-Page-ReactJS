import React, { useState } from 'react';
import './SignupForm.css';


function SignupForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      onSubmit(password)
      await onSubmit(name, email, password);
      setSubmitted(true);
      setError('');
    } catch (err) {
      setSubmitted(false);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form-container">
      <h2 className="signup-form-title">Sign Up</h2>
      {submitted && !error && (
        <p className="success-message">Signup successful!</p>
      )}
      {error && <p className="error-message">{error}</p>}
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="signup-form-input"
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-form-input"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-form-input"
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="signup-form-input"
          required
        />
      </div>

      <button type="submit" className="signup-form-button">
        Sign Up
      </button>
        

    </form>
    
  );
}

export default SignupForm;
