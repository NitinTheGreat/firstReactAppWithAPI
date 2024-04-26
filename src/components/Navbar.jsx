import React, { useState } from 'react';



const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(true); // State to track menu visibility

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      <img src="./ieeecslogo.png" alt="" />
      {window.innerWidth < 1200 && ( // Check screen resolution
        <img
          src="./menu.png"
          alt="Menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
      )}
      <ul className={menuVisible ? 'menu-visible' : 'menu-hidden'}>
        <li>Home</li>
        <li>About Us</li>
        <li>More Facts</li>
        <li>Donate Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

