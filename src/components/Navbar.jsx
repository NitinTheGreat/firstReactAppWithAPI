import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive'); // Updated class name
  };

  return (
    <header>
      <h3><img src="./ieeecslogo.png" alt="" /></h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About Us</a>
        <a href="/#">More Facts</a>
        <a href="/#">Donate Us</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
