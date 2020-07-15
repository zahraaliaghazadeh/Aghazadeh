import React, { useState } from "react";
import { Button } from '@material-ui/core';
import ProductInfoForm from "../../components/ProductInfoForm"
import API from "../../utils/API"
import "./style.css"

export default function AddProductPage() {
    const [productInfo, setProductInfo] = useState({});

    const handleInputChange = async event => {
        const { name, value } = event.target;

        // const files = e.target.files;
        // const data = new FormData();
        // data.append("file", files[0]);
        // // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
        // data.append("upload_preset", "k0kdipbb");
        // const res = await fetch(
        //     "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
        //     {
        //         method: "POST",
        //         body: data
        //     }
        // );
        // const file = await res.json();
        // console.log(file);
        // setProductState({
        //     ...productState, image: file.secure_url
        //     // largeImage: file.eager[0].secure_url
        // });

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