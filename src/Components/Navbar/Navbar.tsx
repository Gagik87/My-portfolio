import "./Navbar.scss";
import menu from "../../img/menu.png";
import close from "../../img/close.png";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuActive, setActive] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="NavbarContainer">
      <nav>
        <div className="navBarWrapper">
          <div
            className="NavbarLogo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span>GAGIK</span>
          </div>
          <div
            className="NavBarItems"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div
            className="menuClose"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              className={!menuActive ? "menu" : "hide_menu"}
              onClick={() => setActive(true)}
              src={menu}
              alt="menu"
            />
            <img
              className={menuActive ? "close" : "hide_close"}
              onClick={() => setActive(false)}
              src={close}
              alt="close"
            />
          </div>
        </div>
      </nav>
      <div
        onClick={() => setActive(false)}
        className={menuActive ? "menuBar NavBarItems" : "closeMenu"}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </div>
  );
};
