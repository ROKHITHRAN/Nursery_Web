import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/css/NavBar.css";
import MenuListComposition from "./MenuButton";
import { HashLink } from "react-router-hash-link";
import LoginPopup from "./LoginPopup";

const NavBar = () => {
  const [isButton, setIsButton] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggle = () => {
    setMenu(!isMenu);
  };

  const handleAdminClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 580);
    };

    // Add event listener to check for resize
    window.addEventListener("resize", handleResize);

    // Initial check for window size
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container_1">
      { !showButton ? (
        <ul className="ele">
          <li className="el"><HashLink to='#Home' className="link">Home</HashLink></li>
          <li className="el"><HashLink to='#Profile' className="link">Profile</HashLink></li>
          <li className="el"><HashLink to='#Plants' className="link">Plants</HashLink></li>
          <li className="el"><HashLink to='#Contact' className="link">Contact Us</HashLink></li>
          <li className="el" onClick={handleAdminClick}>Admin</li>
        </ul>
      ) : (
        <div className="menu"><MenuListComposition /></div>
      )}
      {showLoginPopup && <LoginPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default NavBar;
