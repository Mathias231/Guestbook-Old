import * as React from 'react';
import { TextField, Box } from '@mui/material/';


function Form() {
    return (
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
            }}
            mt={1}
            noValidate
            autoComplete="off"
            required
        >
        <h4>test</h4>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <button>test</button>
      </Box>
    )
}

export default Form;