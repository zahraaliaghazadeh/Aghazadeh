import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"
import logo1 from "../../assets/images/logo1.png"

import { Button, Typography } from '@material-ui/core';



export default function Navbar(props) {


    return (
        <div>
            <nav>
                <ul>
                    <li><img id="logo" src={logo1} alt="logo" height="50px" width="80px"></img></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/request">Request</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/">About</a></li>
                    <Button variant="contained" color="primary">
                         SignUp/Login </Button>
                    
                </ul>
            </nav>
        </div>
    );
}
