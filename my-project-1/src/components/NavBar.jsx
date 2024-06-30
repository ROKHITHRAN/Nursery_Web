import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import "../assets/css/NavBar.css";
import MenuListComposition from "./MenuButton";
import {navigate} from "react-router-dom"
import { HashLink } from "react-router-hash-link";
const NavBar = ()=>
{
    // const navigate = navigate();
    const [isButton,setIsButton] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [isMenu,setMenu] = useState(false);
    const toggle=()=>{
      setMenu(!isMenu);
    }
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
    return(
        <div className="container_1">
            { !showButton?(
                    <ul className="ele">
                      <li className="el"><HashLink to='#Home' className="link">Home</HashLink></li>
                      <li className="el"><HashLink to='#Profile' className="link">Profile</HashLink></li>
                      <li className="el"><HashLink to='#Plants' className="link">Plants</HashLink></li>
                      <li className="el"><HashLink to='#Contact' className="link">Contact Us</HashLink></li>
                    </ul>
                    // <div className="Nav">
                    //     <p className="elements">Home</p>
                    //     <p className="elements">Profile</p>
                    //     <p className="elements">Plants</p>
                    //     <p className="elements">Contact us</p>
                    // </div>
            ):(
                <div className="menu"><MenuListComposition></MenuListComposition></div>
            )
            }
        </div>
    )
}
export default NavBar;