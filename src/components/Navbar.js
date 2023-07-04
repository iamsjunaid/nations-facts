import React from 'react';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="header">
      {/* <img src={logo} alt="logo" width={100} /> */}
      <h1>Explore The World</h1>
      <div className="icon">
        <BiSolidMicrophone className="icons" />
        <FiSettings className="icons" />
      </div>
    </nav>
  );
}

export default Navbar;
