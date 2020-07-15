import React, { useState } from "react";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import "./style.css"

export default function ProductInfoForm(props) {
    // const [info, setInfo] = useState(props.info);


    // Function to upload image on add product

    const uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
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
        // setProductState({
        //     ...productState, image: file.secure_url
        //     // largeImage: file.eager[0].secure_url
        // });
    }


    return (
        // <form id="ProductInfoForm">
        <Grid container id="ProductInfoForm" spacing={2} >
            <Grid item xs={12}>
                <TextField required id="name" className="input" label="Product Name" name="name" value={props.name ? props.name : ""} onChange={props.handleInputChange} />
            </Grid>
            <Grid item xs={12}>
                <TextField required id="brand" className="input" label="Brand" name="brand" value={props.brand ? props.brand : ""} onChange={props.handleInputChange} />
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                    {/* TODO: cloudinary inputchange */}
                    <label htmlFor="productImage">
                        <div id="imgContainer">
                            {props.picture
                                ? <img src={props.picture ? props.picture : ""} alt={props.picture && props.name ? props.name + "image" : ""} />
                                : <h3>Click to add a product image</h3>
                            }
                        </div>
                    </label>
                    <input
                        accept="image/*"
                        id="productImage"
                        multiple
                        type="file"
                    />
                    {/* {props.picture ? <Button variant="contained" color="primary" component="span">
                        Add Product Image
                        </Button>} */}
                        
                </Grid>
                <Grid container item xs={12} sm={6}>
                    <Grid item xs={12}>
                        <TextField required id="price" className="input" label="Price" type="number" name="price" value={props.price ? props.price : ""} onChange={props.handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required id="quantity" className="input" label="Quantity" type="number" name="quantity" value={props.quantity ? props.quantity : ""} onChange={props.handleInputChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl required className="input">
                            <InputLabel id="categorySelect">Product Category</InputLabel>
                            <Select
                                native
                                labelId="categorySelect"
                                id="categoryOptions"
                                name="category"
                                value={props.category ? props.category : ""}
                                onChange={props.handleInputChange}
                            >
                                <option aria-label="None" value="" />
                                <option value={"Cooling"}>Cooling</option>
                                <option value={"Washing"}>Washing</option>
                                <option value={"Other"}>Other</option>
                                {/* <MenuItem value={"Cooling"}>Cooling</MenuItem>
                                    <MenuItem value={"Washing"}>Washing</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem> */}
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="description"
                    className="input"
                    label="Product Description"
                    multiline
                    rows={4}
                    name="description"
                    value={props.description ? props.description : ""}
                    onChange={props.handleInputChange}
                />
            </Grid>
        </Grid>
        // </form>
    );
}