import React from "react";
import API from "../../utils/API";

export default function AdminProductInfoPage(props) {
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

    const handleRemove = () => {
        API.deleteProduct() // TODO: pass id 
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err));

        // redirect
    }

    const handleSubmit = async event => {
        event.preventDefault();

        let image;

        try {
            if (productInfo.picture && typeof productInfo.picture === "object") {
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
            
            const { data } = await API.updateProduct({ ...productInfo, image: image }); // TODO: pass id
            console.log(data);

            setProductInfo({});

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="AdminProductInfoPage">
            <ProductInfoForm {...productInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleRemove={handleRemove} />
        </div>
    );
}