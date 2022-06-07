import * as React from 'react';
import { TextField, Box } from '@mui/material/';


function Form() {
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
            }}
            mt={1}
            noValidate
            autoComplete="off"
        >
        <h4>test</h4>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    )
}

export default Form;