import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/strapi logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#developers">Developers</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#docs">Docs</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#cloud">Cloud</a></li>
      </ul>
      <div className="navbar-actions">
        <FaSearch className="search-icon" />
        <button className="contact-sales">Contact Sales</button>
        <button className="get-started">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
