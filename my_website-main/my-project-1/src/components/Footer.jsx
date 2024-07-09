import React, { useState, useRef } from "react";
import "../assets/css/Footer.css";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="footer">
            <ul className="footer_list">
                <li onClick={handleClose}>
                    <HashLink to='#Home' className='linkFooter'>Home</HashLink>
                </li>
                <li onClick={handleClose}>
                    <HashLink to='#Profile' className='linkFooter'>Profile</HashLink>
                </li>
                <li onClick={handleClose}>
                    <HashLink to='#Plants' className='linkFooter'>Plants</HashLink>
                </li>
                <li onClick={handleClose}>
                    <HashLink to='#Contact' className='linkFooter'>Contact Us</HashLink>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
