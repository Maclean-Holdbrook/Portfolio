import { Link } from "react-router-dom";
import { useState } from "react";
import "../Css/Navbar.css"
import Logo from "../Images/logo.png"

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    return(
      <>
        <header className="navbar">
      <div className="logo">
        <img className="logo-img" src={Logo} alt="my logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="home" aria-current="page" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="service" onClick={closeMenu}>
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="project" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="about" onClick={closeMenu}>
            About Me
          </Link>
        </li>
      </ul>
    </header>
    </>
  );
}
export default Navbar;


