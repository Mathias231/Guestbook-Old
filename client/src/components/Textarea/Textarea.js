import React from 'react';
import { TextareaAutosize } from '@mui/material/';

function Textarea() {
    return(
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Skriv her..."
            style={{ width: 300 }}
        />
    )
}

export default Textarea;