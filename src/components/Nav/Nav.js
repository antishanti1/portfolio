import React, { useState } from 'react';
import './Nav.scss';
import { CgMenuRightAlt } from 'react-icons/cg';

export default function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(true); 
  };

  const handleItemClick = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav  className='nav' >
        <div className='nav__logo'>
          <span>A. Shutkova</span>
        </div>


<div className='nav__menu'>
          {!showDropdown && ( 
            <CgMenuRightAlt className='nav__menu-icon' onClick={toggleDropdown} />
          )}

          {showDropdown && (
            <ul className='nav__menu-items'>
              <li onClick={handleItemClick}>Home</li>
              <li onClick={handleItemClick}>Projects</li>
              <li onClick={handleItemClick}>About</li>
            </ul>
          )}
        </div>
       
      </nav> 
      <hr className='nav__hr'></hr>
    </>
  );
}
