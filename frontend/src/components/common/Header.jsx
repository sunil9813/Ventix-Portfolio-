/* import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="tj-header-area header-absolute">
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink to="/">
              <img src="../images/common/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className="header-menu">
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header-button">
            <a href="#" className="btn tj-btn-primary">
              Hire me!
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
 */
/* 
import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink to="/">
              <img src="../images/common/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className="header-menu">
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header-button">
            <a href="#" className="btn tj-btn-primary">
              Hire me!
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
 */

import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
        <div className="container flexSB">
          <div className="logo-box">
            <NavLink to="/">
              <img src="../images/common/logo.png" alt="logo" />
            </NavLink>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.link}>{link.text}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flexSB">
            <div className="header-button">
              <NavLink to="/" className="btn tj-btn-primary">
                Hire me!
              </NavLink>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
