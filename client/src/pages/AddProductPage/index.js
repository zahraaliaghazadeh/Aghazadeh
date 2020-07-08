import React from "react";
import { Button } from '@material-ui/core';
import ProductInfoForm from "../../components/ProductInfoForm"

export default function AddProductPage() {
    return (
        <div>
            <ProductInfoForm />
            <Button variant="contained">Add Product</Button>
        </div>
    );
}