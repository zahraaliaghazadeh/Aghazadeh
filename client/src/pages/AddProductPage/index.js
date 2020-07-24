import React, { useState } from "react";
import ProductInfoForm from "../../components/ProductInfoForm"
import API from "../../utils/API"
import "./style.css"

export default function AddProductPage() {
    const [productInfo, setProductInfo] = useState({});

    const handleInputChange = async (event, remove) => {
        const { name, value } = event.target;

        if (remove) {
            setProductInfo({ ...productInfo, picture: null });
        }
        else {
            console.log("hi")
            setProductInfo({ ...productInfo, [name]: name === "picture" ? event.target.files[0] : value });
        }

        // if (name === "picture") {
        //     const file = e.target.files[0];

        //     if (file) {
        //         const reader = new FileReader();

        //         reader.readAsDataURL(file)
        //         reader.onload = () => setPicture(reader.result);
        //         // setPicture(URL.createObjectURL(e.target.files[0]))
        //     }
        // }
        // else {
        //     setProductInfo({ ...productInfo, [name]: name === "picture" ? event.target.files[0] : value });
        // }

    }

    const handleSubmit = async event => {
        event.preventDefault();

        if (productInfo.picture) {
            // const files = e.target.files;
            const data = new FormData();
            data.append("file", productInfo.picture);
            // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
            data.append("upload_preset", "k0kdipbb");
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
                {
                    method: "POST",
                    body: data
                }
            );
            const file = await res.json();
            console.log(file);
        }

        // setProductState({
        //     ...productState, image: file.secure_url
        //     // largeImage: file.eager[0].secure_url
        // });

        // API.createProduct(productInfo)
        //     .then(({ data }) => console.log(data))
        //     .catch(err => console.log(err))

        setProductInfo({})
    }

    return (
        <div className="AddProductPage">
            <ProductInfoForm {...productInfo} formType="new" handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        </div>
    );
}