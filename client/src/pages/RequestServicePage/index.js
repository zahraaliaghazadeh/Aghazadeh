import React, { useState } from 'react'
import { Button, Grid, Snackbar, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import API from "../../utils/API";
import "./style.css";

export default function RequestServicePage() {
  const [requestInfo, setRequestInfo] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setRequestInfo({ ...requestInfo, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await API.sendServiceRequest(requestInfo);
      setOpen(true);
      setRequestInfo({});
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="formRequest" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={3}>
        <Grid item>
          <TextField required name="name" value={requestInfo.name ? requestInfo.name : ""} onChange={handleInputChange} label="Name نام" />
        </Grid>
        <Grid item>
          <TextField required name="email" value={requestInfo.email ? requestInfo.email : ""} onChange={handleInputChange} label="Email " />
        </Grid>
        <Grid item>
          <TextField required name="phone" value={requestInfo.phone ? requestInfo.phone : ""} onChange={handleInputChange} label="Phone Number شماره تلفن" />
        </Grid>
        <Grid item>
          <TextField required name="device" value={requestInfo.device ? requestInfo.device : ""} onChange={handleInputChange} label="Device Name نام دستگاه" />
        </Grid>
        <Grid item>
          <TextField required name="brand" value={requestInfo.brand ? requestInfo.brand : ""} onChange={handleInputChange} label="Brand برند" />
        </Grid>
        
        <Grid item>
          <TextField required name="address" value={requestInfo.address ? requestInfo.address : ""} onChange={handleInputChange} label="Address آدرس" />
        </Grid>
        <Grid item>
          <TextField
            name="problem"
            value={requestInfo.problem ? requestInfo.problem : ""}
            onChange={handleInputChange}
            label="Problem مشکل"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">Send Request</Button>
        </Grid>
        {open
          // ? <Alert icon={false} onClose={handleClose} variant="filled" severity="success">Your request has been successfully sent!</Alert>
          ? <Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "right" }} key="bottomright" autoHideDuration={6000} onClose={handleClose}><Alert icon={false} onClose={handleClose} variant="filled" severity="success">Your request has been successfully sent!</Alert></Snackbar>
          : null
        }
      </Grid>
    </form>
  )
}