import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginForm from './components/AuthForm/LoginForm';
import SignupForm from './components/AuthForm/SignupForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignupPage, setShowSignupPage] = useState(false);

  const handleLogin = (email, password) => {
    // Simulated login logic (replace with your actual login logic)
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
      setUser({ email });
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = (name, email, password) => {
    // Simulated signup logic (replace with your actual signup logic)
    setUser({ name, email });
    setLoggedIn(true);
    alert('Signup successful!');
  };

  const handleLogout = () => {
    // Implement your logout logic here (clear user session or tokens)
    setLoggedIn(false);
    setUser(null);
    alert('Logout successful!');
  };

  const togglePage = () => {
    setShowSignupPage(!showSignupPage);
  };

  return (
    <div>
      <Header loggedIn={loggedIn} onLogout={handleLogout} />
      <main>
        <section>
          <h1>Welcome to Zaki Shah's App</h1>
          <p>{showSignupPage ? 'Signup' : 'Login'}</p>
        </section>
        {loggedIn ? (
          <p>Welcome, {user && user.name}!</p>
        ) : showSignupPage ? (
          <>
            <SignupForm onSubmit={handleSignup} />
            <p>
              Already have an account?{' '}
              <button onClick={togglePage} className='btnSwitch' > Switch to Login</button>
            </p>
          </>
        ) : (
          <>
            <LoginForm onSubmit={handleLogin} />
            <p>
              Don't have an account?{' '}
              <button onClick={togglePage} className='btnSwitch'>Switch to Signup</button>
            </p>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
