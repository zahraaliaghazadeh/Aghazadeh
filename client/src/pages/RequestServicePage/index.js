import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"
import TextField from '@material-ui/core/TextField';



export default function RequestServicePage() {
    return (
<div>
<form  noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Required" defaultValue="Name نام" /> <br></br>
        <TextField required id="standard-required" label="Required" defaultValue="Phone Number شماره تلفن" /> <br></br>
        <TextField required id="standard-required" label="Required" defaultValue="Device Name نام دستگاه" /> <br></br>
        <TextField required id="standard-required" label="Required" defaultValue="Brand برند" /> <br></br>
        <TextField required id="standard-textarea" label="Required" defaultValue="Address آدرس" /> <br></br>
        <TextField required id="standard-required" label="Required" defaultValue="Problem مشکل" /> <br></br>
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
       
        
      
      </div>
    </form>
</div>

        )
    }