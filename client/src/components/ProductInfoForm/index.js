import React, { useState, useEffect } from "react";
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import "./style.css"

export default function ProductInfoForm(props) {
    const [picture, setPicture] = useState();
    // const [picture, setPicture] = useState();
    // const [file, setFile] = useState();

    // useEffect(() => {
    //     if (!file) {
    //         setPicture(undefined)
    //         return
    //     }

    //     const objectUrl = URL.createObjectURL(file)
    //     console.log(objectUrl)
    //     setPicture(objectUrl)

    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [file])

    useEffect(() => {
        if (props.picture) {
            const reader = new FileReader();

            reader.readAsDataURL(props.picture)
            reader.onload = () => setPicture(reader.result);
         // setPicture(URL.createObjectURL(e.target.files[0]))
        }
        else {
            setPicture();
        }

    }, [props.picture])


    // Function to upload image on add product

    // const uploadFile = async e => {
    //     const file = e.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();

    //         reader.readAsDataURL(file)
    //         reader.onload = () => setPicture(reader.result);
    //         props.handleInputChange(e);
    //      // setPicture(URL.createObjectURL(e.target.files[0]))
    //     }
    // }

    const removeFile = e => {
        // setPicture();
        props.handleInputChange(e, "remove")
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
                    <div id="imgContainer">
                        {picture
                            ? <img src={picture} alt={picture && props.name ? props.name + "image" : ""} />
                            : <h3>Product Image Preview</h3>
                        }
                        {/* {props.picture
                                ? <img src={props.picture ? props.picture : ""} alt={props.picture && props.name ? props.name + "image" : ""} />
                                : <h3>Click to add a product image</h3>
                            } */}
                    </div>
                    <input
                        accept="image/*"
                        id="productImage"
                        // multiple
                        type="file"
                        name="picture"
                        key={Math.random(1000)}
                        onChange={props.handleInputChange}
                        // onChange={uploadFile}
                        hidden
                    />
                    <label htmlFor="productImage">
                        <Button variant="contained" color="primary" component="span">
                            {picture ? "Change Product Image" : "Add Product Image"}
                        </Button>
                    </label>
                    {picture
                        ? <Button variant="contained" color="primary" component="span" onClick={removeFile}>Remove Product Image</Button>
                        : <></>
                    }
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