import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Fashion Owns</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
