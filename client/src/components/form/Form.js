import * as React from 'react';
import { Container } from '@mui/material/';

// Importing component
import Input from '../Input/Input'

function Form() {
    return (
        <Container>
            <h1>Opprett Innlegg</h1>
            <Input />
        </Container>
    )
}

export default Form;