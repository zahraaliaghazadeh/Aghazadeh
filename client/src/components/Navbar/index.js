import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
// import logo1 from "../../logo1.png"
import logo1 from "../../assets/images/logo1.png"


export default function Navbar(props) {


    return (
        <div>
            <nav>
                <ul>
                    <li><img id="logo" src={logo1} alt="logo" height="50px" width="80px"></img></li>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </nav>
        </div>
    );
}
