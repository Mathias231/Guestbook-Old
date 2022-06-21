import React, { useState } from 'react';
import { Container, Grid, TextField } from '@mui/material/';

function Form() {


    // useState variables
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // Function for form
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {title, body};
        console.log(form);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>Opprett Innlegg</h1>

                <Grid mt={2}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Tittel"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                    />
                </Grid>

                <Grid mt={2}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Skriv her"
                        multiline
                        rows={4}
                        required
                        fullWidth
                        value={ body }
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Grid>

                <Grid mt={2}>
                    <button variant="contained">
                        Opprett innlegg
                    </button>
                </Grid>
            </form>
        </Container>
    )
}

export default Form;