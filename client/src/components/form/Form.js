import * as React from 'react';
import { Container, Grid } from '@mui/material/';

// Importing component
import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import SubmitButton from '../Buttons/SubmitButton';

function Form() {

    return (
        <Container>
            <h1>Opprett Innlegg</h1>
            <Grid mt={2}>
                <Input />
            </Grid>
            <Grid mt={2}>
                <Textarea />
            </Grid>
            <Grid mt={2}>
                <SubmitButton />
            </Grid>
        </Container>
    )
}

export default Form;