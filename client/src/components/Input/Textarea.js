import React from 'react';
import { TextField } from '@mui/material/';

// It is worth to mention that I'm using a TextField instead of TextareaAutosize beacuse it's component's CSS is ugly

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