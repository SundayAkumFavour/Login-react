//Navbar.js
import React from 'react';
import './Navbar.css';
import img3 from './images/img3.jpeg'
const Navbar = () => {
  return (
    <nav className="navbar">
       <div className='logo'>
     <img src={img3} alt="logo"/>
   </div>
     
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
};

export default Navbar;
