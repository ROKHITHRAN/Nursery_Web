import { Paper } from "@mui/material";
import React from "react";
import "../assets/css/Contact.css";

const Contact = () => {
    return (
        <div className="container-1" id='Contact'>
            <ul className="contact-wrapper">
                <li>
                    <h1>CONTACT US</h1>
                </li>
                <li>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2330.698675622493!2d79.18360598580125!3d10.753561973547614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab900721debc1%3A0x5ff2634149c43fb3!2sRokhith%20Nursery%20Garden!5e0!3m2!1sen!2sin!4v1720533579677!5m2!1sen!2sin"
                        width="500"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map"
                    ></iframe>
                </li>
                <li>
                    <Paper elevation={24} className="contact-container">
                        <ul className="contact-list">
                            <li>
                                <div>
                                    <h2>Address</h2>
                                    <p>address</p>
                                </div>
                            </li>
                            <hr className="line"></hr>
                            <li>
                                <div>
                                    <h2>Email</h2>
                                    <p>rokhithran@gmail.com</p>
                                </div>
                            </li>
                            <hr className="line"></hr>
                            <li>
                                <div>
                                    <h2>Phone</h2>
                                    <a href="tel:9677329928" style={{color:"inherit",textDecoration:"none"}}>9677329928</a>
                                </div>
                            </li>
                        </ul>
                    </Paper>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
