import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <i><img alt="" className="logo-svg" src={logo}></img></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
              <NavLink
                exact
                to="artwork"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Art Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="career"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Career
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="digitalmarketing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Digital Marketing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="contentcreation"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Content Creation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="filmandseries"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Film & Series
              </NavLink>
            </li>
            <li className="nav-item last">
              <NavLink
                exact
                to="team"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Team
              </NavLink>
            </li>
            <div className="navbar-btn-responsive">
            <NavLink to="contactus">
              <button className="header-btn"><strong>contact us</strong></button>
            </NavLink>
          </div>
          </ul>
          <div className="navbar-btn">
            <NavLink to="contactus">
              <button className="header-btn"><strong>contact us</strong></button>
            </NavLink>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

