// This button shall show and close a form on press

import Button from '@mui/material/Button';
import React, { useState } from "react";

// Importing components
// import Form from '../form/Form'

function SwitchButton(props) {
    const [show, setShow] = useState();

    // Change's button's parameter (name) to "CLOSE" or OPEN on button click 
    function changeName() {
        switch(show) {
            case true:
                setShow(false, show)
                break;
            case false:
                setShow(true, show)
                break;
            default:
                throw new Error();
        }
    }


    return (
        <Button variant="contained" value={name} onClick={changeName}>Opprett innlegg</Button>
    )
}

export default SwitchButton;