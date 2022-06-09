import React, { useState } from 'react';
import { TextField } from '@mui/material/';

// It is worth to mention that I'm using a TextField instead of TextareaAutosize beacuse it's component's CSS is ugly

function Textarea() {
    const [body, setBody] = useState('');
    
    return(
        <TextField
            id="outlined-multiline-static"
            label="Skriv her"
            multiline
            rows={4}
            fullWidth
            value={ body }
            onChange={(e) => setBody(e.target.value)}
        />
    )
}

export default Textarea;