import React, { useState } from "react";
import ProductInfoForm from "../../components/ProductInfoForm"
import API from "../../utils/API"
import "./style.css"

export default function AdminAddProductPage() {
    const [productInfo, setProductInfo] = useState({});

    const handleInputChange = async (event, remove) => {
        const { name, value } = event.target;

        if (remove) {
            setProductInfo({ ...productInfo, picture: null });
        }
        else {
            setProductInfo({ ...productInfo, [name]: name === "picture" ? event.target.files[0] : value });
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();

        let image;

        try {
            if (productInfo.picture) {
                const formData = new FormData();
                formData.append("file", productInfo.picture);
                // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
                formData.append("upload_preset", "k0kdipbb");
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
                    {
                        method: "POST",
                        body: formData
                    }
                );
                
                const file = await res.json();
                console.log(file);
                image = file.secure_url;
            }

            const { data } = await API.createProduct({...productInfo, image: image });
            console.log(data);

            setProductInfo({});

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="AdminAddProductPage">
            <ProductInfoForm {...productInfo} formType="new" handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
        </div>
    );
}