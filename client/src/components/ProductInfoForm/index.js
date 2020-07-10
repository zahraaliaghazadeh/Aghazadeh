import React from "react";
import { TextField } from "@material-ui/core"

export default function ProductInfoForm() {



    // Function to upload image on add product

//     const uploadFile = async e => {
//         const files = e.target.files;
//         const data = new FormData();
//         data.append("file", files[0]);
//         // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
//         data.append("upload_preset", "k0kdipbb");
//         const res = await fetch(
//             "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
//             {
//                 method: "POST",
//                 body: data
//             }
//         );
//         const file = await res.json();
//         console.log(file);
//         setProductState({
//             ...productState, image: file.secure_url
//             // largeImage: file.eager[0].secure_url
//         });


    return (
        <form>
            <TextField required id="name" label="Product Name" />
        </form>
    );
}