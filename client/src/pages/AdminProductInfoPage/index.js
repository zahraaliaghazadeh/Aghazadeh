import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import ProductInfoForm from "../../components/ProductInfoForm"
import API from "../../utils/API";

export default function AdminProductInfoPage() {
    const [productInfo, setProductInfo] = useState();
    const { id } = useParams();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    useEffect(() => {
        // console.log(location.state)
        // setProductInfo(Object.assign({}, location.state));

        API.getSingleProduct(id)
            .then(({ data }) => setProductInfo(data))
            .catch(err => console.log(err))
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

        let image;

        try {
            // if (productInfo.picture && typeof productInfo.picture === "object") {
            //     const formData = new FormData();
            //     formData.append("file", productInfo.picture);
            //     // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
            //     formData.append("upload_preset", "k0kdipbb");
            //     const res = await fetch(
            //         "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
            //         {
            //             method: "POST",
            //             body: formData
            //         }
            //     );

            //     const file = await res.json();
            //     console.log(file);
            //     image = file.secure_url;
            // }

            // console.log(productInfo)

            // const { data } = await API.updateProduct({ ...productInfo, image: image }, id); // TODO: pass id
            const { data } = await API.updateProduct(productInfo, id); // TODO: pass id
            console.log(data);
            setOpen(true);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="AdminProductInfoPage">
            <ProductInfoForm {...productInfo} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleRemove={handleRemove} />
            {open
                // ? <Alert icon={false} onClose={handleClose} variant="filled" severity="success">Your request has been successfully sent!</Alert>
                ? <Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomright" autoHideDuration={6000} onClose={handleClose}><Alert icon={false} onClose={handleClose} variant="filled" severity="success">Product Info updated!</Alert></Snackbar>
                : null
            }
        </div>
    );
}