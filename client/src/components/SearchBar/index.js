import React, { useState } from "react";
import { InputBase } from "@material-ui/core";

import "./style.css"

export default function SearchBar(props) {
    // const [query, setQuery] = useState("");

    // const handleInputChange = event => {
    //     setQuery(event.target.value);
    // }

    // const handleSubmit = event => {
    //     if (event.key === "Enter") {
    //         props.handl
    //     }
    //     console.log(event.target.value)
    // }

    return (
        <div className="SearchBar">
            <InputBase id="input" placeholder="Product Search..." value={props.query} onChange={props.handleInputChange} onKeyPress={props.handleSubmit}/>
        </div>
    );
}