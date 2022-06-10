import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material/';

function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    function handleSubmit() {

    }

    return (
        <Container>
            <form onSubmit={handleSubmit()}>
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
                        fullWidth
                        value={ body }
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Grid>
                <Grid mt={2}>
                    <Button variant="contained">
                        Opprett innlegg
                    </Button>
                </Grid>
            </form>
        </Container>
    )
}

export default Form;