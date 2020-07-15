import React, { useState } from "react";
import { Button } from '@material-ui/core';
import ProductInfoForm from "../../components/ProductInfoForm"
import API from "../../utils/API"
import "./style.css"

export default function AddProductPage() {
    const [productInfo, setProductInfo] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProductInfo({...productInfo, [name]: value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        API.createProduct(productInfo)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
        
        setProductInfo({})
    }

    return (
        <form className="AddProductPage" onSubmit={handleSubmit}>
            <ProductInfoForm {...productInfo} handleInputChange={handleInputChange} />
            <Button variant="contained" type="submit">Add Product</Button>
        </form>
    );
}