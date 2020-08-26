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
            if (typeof props.picture !== "string") {
                const reader = new FileReader();
    
                reader.readAsDataURL(props.picture)
                reader.onload = () => {
                    setPicture(reader.result)};
                // setPicture(URL.createObjectURL(e.target.files[0]))
            }
            else {
                setPicture(props.image)
            }
        }
        else {
            setPicture();
        }
    }, [props.picture])

    const removeFile = event => {
        props.handleInputChange(event, "remove");
    }

    const revertFile = event => {
        props.handleInputChange(event, "revert");
    }

    return (
        <form id="ProductInfoForm" onSubmit={props.handleSubmit}>
            <Grid container spacing={2} >
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
                                : <h3>Click to add a product image</h3>
                            }
                        </div>
                        <input
                            accept="image/*"
                            id="productImage"
                            // multiple
                            type="file"
                            name="picture"
                            key={Math.random(1000)}
                            onChange={props.handleInputChange}
                            hidden
                        />
                        <label htmlFor="productImage">
                            <Button variant="contained" color="primary" component="span">
                                {picture ? "Change Product Image" : "Add Product Image"}
                            </Button>
                        </label>
                        {picture
                            ? <Button variant="contained" color="primary" component="span" name="remove" onClick={removeFile}>Remove Product Image</Button>
                            : <></>
                        }
                        {props.image && typeof picture !== "string"
                            ? <Button variant="contained" color="primary" component="span" name="revert" onClick={revertFile}>Original Product Image</Button>
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
            <Button variant="contained" type="submit">{props.formType ? "Add" : "Update"} Product</Button>
            {!props.formType ? <Button variant="contained" onClick={props.handleRemove}>Remove Product</Button> : <></>}
        </form>
    );
}