import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material/";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Home</Link>
            <Link to="../Login/" style={{ textDecoration: 'none', color: 'white'}}>Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}