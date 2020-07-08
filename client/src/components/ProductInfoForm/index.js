import React from "react";
import { TextField } from "@material-ui/core"

export default function ProductInfoForm() {
    return (
        <form>
            <TextField required id="name" label="Product Name" />
        </form>
    );
}