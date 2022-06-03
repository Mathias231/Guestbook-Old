// This button shall show and close a form on press

import Button from '@mui/material/Button';
import React, { useState } from "react";



function MultiButton() {
    const [name, setName] = useState('CLOSE');

    // Change's button's parameter (name) to "CLOSE" or OPEN on button click 
    function changeName() {
        switch(name) {
            case 'CLOSE':
                setName('OPEN', name)
                break;
            case 'OPEN':
                setName('CLOSE', name)
                break;
            default:
                throw new Error();
        }
    }

    return (
        <Button variant="contained" name={name} onClick={changeName}>Opprett innlegg</Button>
    )
}

export default MultiButton;