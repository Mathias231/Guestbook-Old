import * as React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar } from "@mui/material/";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}