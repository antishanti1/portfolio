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

          <div
            className="nav__menu"
            style={{
              width: "100%",
            }}
          >
            <ul
              className="nav__menu-items"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
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
          </div>
        </div>
      </nav>
    </>
  );
}
