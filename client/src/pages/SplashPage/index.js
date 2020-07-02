import React from 'react'
// about page style
import "./style.css"
import API from "../../utils/API"
import Button from '@material-ui/core/Button';


export default function SplashPage() {
    return (
        <div>
"Helloo"
<Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
        </div>

        )
    }