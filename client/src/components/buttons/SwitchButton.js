//Importing style and useState for button porpuse
import { Button, Collapse, Container } from '@mui/material/';
import React, { useState } from "react";

// Importing components
import Form from '../Form/Form'

function SwitchButton() {
    // Sets show variable
    const [show, setShow] = useState(false);

    // Changes show from true to false
    const handleChange = () => {
        setShow((show) => !show)
    }

    return(
        <Container>
            <Button variant="contained" value={show} onClick={handleChange}>{show ? "Lukk" : "Opprett innlegg"}</Button>
            <Collapse in={show}>
                {show ? <Form /> : null}
            </Collapse>
        </Container>
    )
}


export default SwitchButton;