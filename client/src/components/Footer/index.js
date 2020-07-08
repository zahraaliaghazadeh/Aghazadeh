import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import API from "../../utils/API"


export default function Footer(props) {


    return (
        <div>
     <footer className="footer">
         <h3 id="copyRight">copy right 2020</h3>
     </footer>
        </div>
    );
}
