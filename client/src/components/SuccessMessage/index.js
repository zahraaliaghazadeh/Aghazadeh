import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

export default function SuccessMessage(props) {
    return (
        <Snackbar open={props.open} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomright" autoHideDuration={6000} onClose={props.handleClose}>
            <Alert icon={false} onClose={props.handleClose} variant="filled" severity="success">{props.message}</Alert>
        </Snackbar>
    );
}