import { Paper } from "@mui/material";
import React from "react";
import "../assets/css/Contact.css";
const Contact = ()=>
{
    return(
        <div className="container-1" id='Contact'>
            <div className="heading">CONTACT US</div>
            <Paper elevation={24} className="contact-container"></Paper>
        </div>
    )
}
export default Contact;