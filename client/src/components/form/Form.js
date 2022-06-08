import * as React from 'react';
import { Container, Box } from '@mui/material/';

// Importing component
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

function Form() {
    return (
        <Container>
            <h1>Opprett Innlegg</h1>
            <Box>
                <Input /><br></br>
                <Textarea />
            </Box>
        </Container>
    )
}

export default Form;