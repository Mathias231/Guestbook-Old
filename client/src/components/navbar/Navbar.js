import * as React from "react";
import { AppBar, Box, Toolbar } from "@mui/material/";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: "white"}}>Home</Link>
            <Link to="/login" style={{ textDecoration: 'none', color: 'White'}}>Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}