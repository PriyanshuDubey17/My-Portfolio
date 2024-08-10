import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu(); // Close the menu after an item is clicked
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={logo} alt="" className="pen-image" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={logo} alt="" className="pen-image" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && (
            <img src={logo} alt="" className="pen-image" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleMenuClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={logo} alt="" className="pen-image" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={logo} alt="" className="pen-image" />
          )}
        </li>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
