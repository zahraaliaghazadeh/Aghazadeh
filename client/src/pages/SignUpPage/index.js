import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

export default function SignUpPage() {
    const classes = useStyles();

    return (
      <div>
           <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Name"
          variant="filled"
        /> <br></br>
           <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Email"
          variant="filled"
        /> <br></br>
           <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="password"
          variant="filled"
        />
      </div>

        )
    }