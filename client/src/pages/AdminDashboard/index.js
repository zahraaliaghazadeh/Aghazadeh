import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { Grid } from "@material-ui/core";
import Searchbar from "../../components/SearchBar";
import ProductTile from "../../components/ProductTile";
import API from "../../utils/API";

export default function AdminDashboard() {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");
    const [results, setResults] = useState([]);
    const history = useHistory();

    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    const handleSubmit = async event => {
        if (event.key === "Enter") {
            const { value } = event.target;

            if (value) {
                try {
                    const { data } = await API.search(value);
                    setResults([]);
                    console.log(data)

                    if (data.length > 0) {
                        setResults(data);
                        setQuery("");
                    } 
                    else {
                        setMessage("No Products Found");  
                    } 
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }

    const handleClick = id => {
        // console.log(id)
        history.push("/admin/product/" + id);
    }

    const productResults = (
        <Grid container spacing={2}>
            {results.map(result => <Grid item sm={4} md={3} key={result._id}><ProductTile {...result} handleClick={handleClick} /></Grid>)}
        </Grid>
    );

    return (
        <>
            <Searchbar query={query} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
            {results.length > 0 ? productResults : message}
        </>
    );
}