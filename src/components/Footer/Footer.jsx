import React from 'react';
import logo from './Logo.png';

import './Footer.css'; // Import the Footer component's CSS

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
        <img src={logo} alt="Logo" className='imageLogo' />
        </div>
        <p>&copy; {new Date().getFullYear()} ZAKI SHAH</p>
      </div>
    </footer>
  );
}

export default Footer;
