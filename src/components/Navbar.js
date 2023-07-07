import React from 'react';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import '../styles/Navbar.css';
import logo from '../images/pngwing.com.png';

function Navbar() {
  return (
    <nav className="header">
      <img src={logo} alt="logo" width={100} />
      <h1>Nations-Facts</h1>
      <div className="icon">
        <BiSolidMicrophone className="icons" />
        <FiSettings className="icons" />
      </div>
    </nav>
  );
}

export default Navbar;
