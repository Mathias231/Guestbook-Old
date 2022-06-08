import * as React from 'react';
import { Box } from '@mui/material/';

// Importing component
import Input from '../Input/Input'

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
          <Input />
      </Box>
    )
}

export default Form;