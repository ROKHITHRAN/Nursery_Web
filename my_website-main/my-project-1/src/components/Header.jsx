import React from "react";
import "../assets/css/Header.css"
import logo from "../assets/images/logo.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Header =()=>{
                return(
                    <div className="head" id='Home'>
                        <div className="title">
                            <ul className="u_list">
                                <li><img src={logo} className="logo"></img></li>
                                <li><p className="name">ROKHITH NURSERY AND GARDENING</p></li>
                            </ul>
                        </div>
                        {/* <div className="icons">
                            <FaFacebook className="icon"/>
                            <FaInstagramSquare className="icon"/>
                        </div> */}
                    </div>
                )
}
export default Header;