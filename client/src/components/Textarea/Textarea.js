import React from 'react';
import { TextField } from '@mui/material/';

function Textarea() {
    return(
        <TextField
            id="outlined-multiline-static"
            label="Skriv her"
            multiline
            rows={4}
            fullWidth
        />
    )
}

export default Textarea;