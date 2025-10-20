import { Link } from "react-router-dom";
import "../Css/Navbar.css"
import Logo from "../Images/logo.png"

function Navbar(){
    return(
      <>
        <header className="navbar">
      <div className="logo">
        <img className="logo-img" src={Logo} alt="my logo" />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="home" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/service" className="service">
            Service
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="project">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="about">
            About Me
          </Link>
        </li>
      </ul>
    </header>
    </>
  );
}
export default Navbar;


