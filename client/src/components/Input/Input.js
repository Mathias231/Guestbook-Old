import React, { useState } from 'react';
import { TextField } from '@mui/material/';

function Input() {
  const [title, setTitle] = useState('');
    return(
        <TextField
        required
        id="outlined-required"
        label="Tittel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
    )
}


export default Input;