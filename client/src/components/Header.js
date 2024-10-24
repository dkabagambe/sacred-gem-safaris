import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img/logo.PNG";
import { IoIosClose } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaCompass,
  FaTags,
  FaImages,
  FaNewspaper,
  FaHandsHelping,
  FaInfoCircle,
  FaClipboardList,
} from "react-icons/fa";
import { GiElephant, GiEarthAfricaEurope } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="SACRED GEM SAFARIS" />
          </Link>
        </div>

        <h1 className="website-name">SACRED GEM SAFARIS</h1>
        <button className="enquire-button">ENQUIRE</button>
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <IoIosClose
            className="close-icon"
            size={30}
            margin={10}
            color="white"
            onClick={closeMenu} // Attach closeMenu function
          />
          <ul>
            <li
              className="menu-item"
              onMouseEnter={() => toggleSubmenu(1)}
              onMouseLeave={() => toggleSubmenu(null)}
            >
              <Link to="/destinations">
                <FaMapMarkerAlt /> DESTINATIONS
              </Link>
              <span className="arrow">&#8250;</span>
              {activeSubmenu === 1 && (
                <ul className="submenu">
                  <li>
                    <Link to="/destinations/africa">Africa</Link>
                  </li>
                  <li>
                    <Link to="/destinations/asia">Asia</Link>
                  </li>
                  <li>
                    <Link to="/destinations/europe">Europe</Link>
                  </li>
                  <li>
                    <Link to="/destinations/america">America</Link>
                  </li>
                  <li>
                    <Link to="/destinations/oceania">Oceania</Link>
                  </li>
                  <li>
                    <Link to="/destinations/antarctica">Antarctica</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item"
              onMouseEnter={() => toggleSubmenu(2)}
              onMouseLeave={() => toggleSubmenu(null)}
            >
              <Link to="/safaris">
                <GiElephant /> SAFARIS
              </Link>
              <span className="arrow">&#8250;</span>
              {activeSubmenu === 2 && (
                <ul className="submenu">
                  <li>
                    <Link to="/safaris/wildlife">Wildlife Safari</Link>
                  </li>
                  <li>
                    <Link to="/safaris/adventure">Adventure Safari</Link>
                  </li>
                  <li>
                    <Link to="/safaris/cultural">Cultural Safari</Link>
                  </li>
                  <li>
                    <Link to="/safaris/luxury">Luxury Safari</Link>
                  </li>
                  <li>
                    <Link to="/safaris/eco">Eco Safari</Link>
                  </li>
                  <li>
                    <Link to="/safaris/birding">Birding Safari</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item"
              onMouseEnter={() => toggleSubmenu(3)}
              onMouseLeave={() => toggleSubmenu(null)}
            >
              <Link to="/experiences">
                <FaCompass /> EXPERIENCES
              </Link>
              <span className="arrow">&#8250;</span>
              {activeSubmenu === 3 && (
                <ul className="submenu">
                  <li>
                    <Link to="/experiences/cultural">Cultural</Link>
                  </li>
                  <li>
                    <Link to="/experiences/adventure">Adventure</Link>
                  </li>
                  <li>
                    <Link to="/experiences/wellness">Wellness</Link>
                  </li>
                  <li>
                    <Link to="/experiences/family">Family</Link>
                  </li>
                  <li>
                    <Link to="/experiences/romantic">Romantic</Link>
                  </li>
                  <li>
                    <Link to="/experiences/culinary">Culinary</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="menu-item"
              onMouseEnter={() => toggleSubmenu(4)}
              onMouseLeave={() => toggleSubmenu(null)}
            >
              <Link to="/offers">
                <FaTags /> EXCLUSIVE OFFERS
              </Link>
              <span className="arrow">&#8250;</span>
              {activeSubmenu === 4 && (
                <ul className="submenu">
                  <li>
                    <Link to="/offers/special">Special Offers</Link>
                  </li>
                  <li>
                    <Link to="/offers/seasonal">Seasonal Offers</Link>
                  </li>
                  <li>
                    <Link to="/offers/last-minute">Last Minute Offers</Link>
                  </li>
                  <li>
                    <Link to="/offers/group">Group Offers</Link>
                  </li>
                  <li>
                    <Link to="/offers/honeymoon">Honeymoon Offers</Link>
                  </li>
                  <li>
                    <Link to="/offers/luxury">Luxury Offers</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/gallery">
                <FaImages /> OUR GALLERY
              </Link>
            </li>
            <li>
              <Link to="/articles">
                <FaNewspaper /> OUR ARTICLES
              </Link>
            </li>
            <li>
              <Link to="/services">
                <FaHandsHelping /> OUR SERVICES
              </Link>
            </li>
            <li>
              <Link to="/impact">
                <GiEarthAfricaEurope /> OUR IMPACT
              </Link>
            </li>
            <li className="about-us">
              <Link to="/about">
                <FaInfoCircle /> ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/plan-experience">
                <FaClipboardList /> PLAN YOUR EXPERIENCE
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
