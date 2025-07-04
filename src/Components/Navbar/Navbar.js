import React, { useState } from 'react'
import './navbar.css';
// import logo from "../../assets/logo.jpg";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
        {/* <img src={logo} alt="Logo" height="40" className="me-1" /> */}
        <h1><FontAwesomeIcon icon={faGlobe} /> VentureVista</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
              HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/BlogListing">
              BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/"  onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}>
              DESTINATIONS ▾
              {dropdownOpen && (
                <ul style={styles.dropdownMenu}>
                  <li style={styles.dropdownItem}>
                    <Link style={styles.droplink} className="nav-link" to="/traveldescription/bali">
                    Bali
                    </Link>
                  </li>
                  <li style={styles.dropdownItem}>
                    <Link style={styles.droplink} className="nav-link" to="/traveldescription/paris">
                    Paris
                    </Link>
                  </li>
                  <li style={styles.dropdownItem}>
                    <Link style={styles.droplink} className="nav-link" to="/traveldescription/dubai">
                    Dubai
                    </Link>
                  </li>
                  <li style={styles.dropdownItem}>
                    <Link style={styles.droplink} className="nav-link" to="/traveldescription/singapore">
                    Singapore
                    </Link>
                  </li>
                </ul>
              )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              CATEGORIES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">
              ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
              CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
const styles = {
   dropdownMenu: {
    position: 'absolute',
    backgroundColor: '#000000a6',
    color: '#adadad',
    borderRadius: '6px',
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    listStyle: 'none',
    padding: '10px 0',
    zIndex: 10,
    minWidth: '160px'
  },
  dropdownItem: {
    padding: '10px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    lineHeight: "20px",
    marginLeft: "0px",
    textAlign: "left",
  },
  droplink: {
    lineHeight: "0px"
  }
}

export default Navbar;