import React from "react";
import { Button } from '@material-ui/core';
import ProductInfoForm from "../../components/ProductInfoForm"
import "./style.css"

export default function AddProductPage() {
    return (
        <div className="AddProductPage">
            <ProductInfoForm />
            <Button variant="contained">Add Product</Button>
        </div>
    );
}