// client/src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <a href="/" className="logo-text">CBOT</a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/chatbot">Chatbot</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
