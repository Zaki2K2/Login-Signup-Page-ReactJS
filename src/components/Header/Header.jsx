import React from 'react';
import './Header.css';
import logo from './Logo.png';

function Header({ loggedIn, onLogout }) {
  const handleLogout = () => {
    // Call the onLogout function to perform the logout logic
    onLogout();
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" className="imageLogo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {loggedIn ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
