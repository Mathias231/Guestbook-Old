import React from 'react';
import { TextField } from '@mui/material/';

function Input() {
    return(
        <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
    )
}


export default Input;