import React from "react";

import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";

const TopBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" edge="start">
        <MenuIcon />
      </IconButton>
      <Typography>Portfolio Items To Do</Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;
