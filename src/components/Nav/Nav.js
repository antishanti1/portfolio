import React, { useState } from "react";
import "./Nav.scss";
import { CgMenuRightAlt } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/logo.png";

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
      <nav className="container">
        <div className="nav">
          <div className="nav__logo">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </div>

          <div className="nav__menu--mobile">
            {!showDropdown && (
              <CgMenuRightAlt
                className="nav__menu-icon"
                onClick={toggleDropdown}
              />
            )}

            {showDropdown && (
              <ul className="nav__menu-items">
                <li onClick={handleItemClick}>
                  <HashLink smooth to="/#projects" onClick={handleItemClick}>
                    Projects
                  </HashLink>
                </li>
                <li onClick={handleItemClick}>
                  <HashLink smooth to="/#skills" onClick={handleItemClick}>
                    Skills
                  </HashLink>
                </li>
                <li onClick={handleItemClick}>
                  <HashLink smooth to="/#contact" onClick={handleItemClick}>
                    Contact
                  </HashLink>
                </li>
              </ul>
            )}
          </div>

          <div className="nav__menu--desktop">
            <ul className="nav__menu-items">
              <li className="link" onClick={handleItemClick}>
                <HashLink smooth to="/#projects" onClick={handleItemClick}>
                  projects
                </HashLink>
              </li>
              <li className="link" onClick={handleItemClick}>
                <HashLink smooth to="/#skills" onClick={handleItemClick}>
                  skills
                </HashLink>
              </li>
              <li className="link" onClick={handleItemClick}>
                <HashLink smooth to="/#contact" onClick={handleItemClick}>
                  contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
