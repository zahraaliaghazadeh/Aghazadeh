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
                    <li><a href="/">Home<br></br>
 صفحه اصلی</a></li>
                    <li><a href="/products">Products<br></br>
 محصولات</a></li>
                    <li><a href="/contact">Contact<br></br>
 تماس</a></li>
                    <li><a href="/services">Services<br></br>
 خدمات</a></li>
                    <li><a href="/request">Request<br></br>
 درخواست</a></li>
                    <li><a href="/signup">Sign Up<br></br>
 حساب کاربری</a></li>
                    <li><a href="/about">About<br></br>
 درباره ما</a></li>
                    <Button variant="contained" color="primary">
                        SignUp/Login<br></br>
                        ورود به حساب کاربری </Button>

                </ul>
            </nav>
        </div>
    );
}
