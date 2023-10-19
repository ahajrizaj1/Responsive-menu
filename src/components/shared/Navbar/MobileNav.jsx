import { Link } from "react-router-dom";
import "../Navbar/mobileNav.scss";

const MobileNav = () => {
  return (
    <nav className="mobile__nav">
      <div className="mobile__nav-logo">
        <Link to="/">GALAXY</Link>
      </div>
      <div className="mobile__nav-links">
        <div className="mobile__nav-link">
          <Link to="/home">home</Link>
        </div>
        <div className="mobile__nav-link">
          <Link to="/about">about</Link>
        </div>
        <div className="mobile__nav-link">
          <Link to="/projects">projects</Link>
        </div>
        <div className="mobile__nav-link">
          <Link to="/contact">contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
