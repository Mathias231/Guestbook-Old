import * as React from 'react';
import { styled, Box , Paper, Grid} from '@mui/material/';

// Importing components
import SwitchButton from '../Buttons/SwitchButton'


// Styling for Grid (found from grid documentation from MUI)
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


// Creates the "Main body" where form and posts will be inside.
function MainBody() {

    return (
     <div>
      <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>Resultat</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <SwitchButton />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
};

export default MainBody;