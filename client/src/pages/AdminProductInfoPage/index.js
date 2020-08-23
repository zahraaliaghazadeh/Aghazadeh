import React, { useState, useEffect } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
import ProductInfoForm from "../../components/ProductInfoForm";
import SuccessMessage from "../../components/SuccessMessage";
import API from "../../utils/API";

export default function AdminProductInfoPage() {
    const [productInfo, setProductInfo] = useState();
    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    useEffect(() => {
        // if coming from admin search page, get product info from
        // state object passed. If user enters the exact url for
        // the product, get product info from API
        if (location.state) {
            setProductInfo(Object.assign({}, location.state, { picture: location.state.image }));
        }
        else {
            API.getSingleProduct(id)
                .then(({ data }) => setProductInfo(data))
                .catch(err => console.log(err))
        }
    }, []);

    const handleInputChange = async (event, remove) => {
        const { name, value } = event.target;

        // console.log(name, value)

        if (remove) {
            setProductInfo({ ...productInfo, picture: null });
        }
        else {
            // console.log(productInfo[name])
            setProductInfo({ ...productInfo, [name]: name === "picture" ? event.target.files[0] : value });
        }
    }

    const handleRemove = () => {
        API.deleteProduct(id)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err));

        // redirect
    }

    const handleSubmit = async event => {
        event.preventDefault();

        let image = productInfo.image;

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

            console.log(productInfo)

            const { data } = await API.updateProduct({...productInfo, image: image }, id); 
            // const { data } = await API.updateProduct(productInfo, id); 
            console.log(data);
            history.replace(location.pathname, data);
            setOpen(true);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="AdminProductInfoPage">
            <ProductInfoForm {...productInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleRemove={handleRemove} />
            {open ? <SuccessMessage open={open} handleClose={handleClose} message="Product Info updated!" /> : null}
        </div>
    ); 
}