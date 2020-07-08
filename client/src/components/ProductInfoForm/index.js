import React from "react";
import { Button, Grid, TextField } from "@material-ui/core"
import "./style.css"

export default function ProductInfoForm() {
    return (
        <form id="ProductInfoForm">
            <Grid container>
                <Grid item xs={12}>
                    <TextField required id="name" className="input" label="Product Name" />
                </Grid>
                <Grid item xs={12}>
                    <TextField required id="brand" className="input" label="Brand" />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={6}>
                        <div id="imgContainer"></div>
                        <input
                            accept="image/*"
                            id="productImage"
                            multiple
                            type="file"
                        />
                        <label htmlFor="productImage">
                            <Button variant="contained" color="primary" component="span">
                                Add Product Image
                            </Button>
                        </label>
                    </Grid>
                    <Grid container item xs={6}>
                        <Grid item xs={12}>
                            <TextField required id="price" className="input" label="Price" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required id="quantity" className="input" label="Quantity" type="number" />
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
                    />
                </Grid>
            </Grid>



        </form>
    );
}