import React from 'react';
import { TextField } from '@mui/material/';

function Input() {
    return(
        <TextField
        required
        id="outlined-required"
        label="Tittel"
        fullWidth
      />
    )
}


export default Input;