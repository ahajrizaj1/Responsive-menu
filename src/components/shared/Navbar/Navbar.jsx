import { Link } from "react-router-dom";
import "../Navbar/navbar.scss";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Backdrop from "../Backdrop";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleShowMobileNav = () => {
    setShowMobileNav((prev) => !prev);
    setShowBackdrop((prev) => !prev);
  };

  const handleCloseShowMobileMenu = () => {
    setShowMobileNav(false);
    setShowBackdrop(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setShowMobileNav(false);
        setShowBackdrop(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {showMobileNav && <MobileNav />}
      {showBackdrop && <Backdrop hideBackdrop={handleCloseShowMobileMenu} />}
      <div className="nav__logo">
        <Link to="/">GALAXY</Link>
      </div>
      <div className="nav__links">
        <div className="nav__link">
          <Link to="/home">home</Link>
        </div>
        <div className="nav__link">
          <Link to="/about">about</Link>
        </div>
        <div className="nav__link">
          <Link to="/projects">projects</Link>
        </div>
        <div className="nav__link">
          <Link to="/contact">contact</Link>
        </div>
      </div>
      {showMobileNav ? (
        <AiOutlineClose className="close-icons" onClick={handleCloseShowMobileMenu} />
      ) : (
        <div className="burger" onClick={handleShowMobileNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
