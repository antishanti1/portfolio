import React, { useState } from 'react';
import './Nav.scss';
import { CgMenuRightAlt } from 'react-icons/cg';

export default function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav__logo'>
          <span>A. Shutkova</span>
        </div>

        <div className='nav__menu'>
          <CgMenuRightAlt className='nav__menu-icon' onClick={toggleDropdown} />

          {showDropdown && (
            <ul className='nav__menu-items'>
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
