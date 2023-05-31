import React, { useState } from 'react';
import './Nav.scss';
import { CgMenuRightAlt } from 'react-icons/cg';
import {HashLink} from 'react-router-hash-link';

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
            
            <li onClick={handleItemClick}>
                              <HashLink smooth to="/#projects" onClick={handleItemClick}>Projects</HashLink>
              </li>
            <li onClick={handleItemClick}>
                              <HashLink smooth to="/#skills" onClick={handleItemClick}>Skills</HashLink>
              </li>
            <li onClick={handleItemClick}>
                              <HashLink smooth to="/#contact" onClick={handleItemClick}>Contact</HashLink>
              </li>

            </ul>
          )}
        </div>
       
      </nav> 
      <hr className='nav__hr'></hr>
    </>
  );
}
