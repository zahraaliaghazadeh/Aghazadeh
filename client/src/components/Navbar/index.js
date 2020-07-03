import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"

export default function Navbar(props) {


    return (
        <div>
            <nav>
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">News</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
            </nav>
        </div>
    );
}
