import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


function Form() {
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextareaAutosize
            maxRows={4}
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 200 }}
        />
      </Box>
    )
}

export default Form;