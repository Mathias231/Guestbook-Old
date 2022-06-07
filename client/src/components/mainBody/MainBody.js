import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Importing style and useState for button porpuse
import Button from '@mui/material/Button';
import { useState } from "react";

// Importing components
import Form from '../form/Form'

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
  // Sets variable
  const [show, setShow] = useState(false);

  // Change's button's parameter (name) to "CLOSE" or OPEN on button click 
  function changeState() {
      switch(show) {
          case true:
              setShow(false, show)
              break;
          case false:
              setShow(true, show)
              break;
          default:
              throw new Error();
      }
  }
  
    return (
     <div>
      <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Item>Resultat</Item>
            </Grid>
            <Grid item xs={6} md={4}>
              <Item>
                <Button variant="contained" value={show} onClick={changeState}>{show ? "Lukk" : "Opprett innlegg"}</Button>,
                {show ? <Form /> : null}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    )
};

export default MainBody;