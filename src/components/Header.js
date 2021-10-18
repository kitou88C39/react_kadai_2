import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "primary" }}>
      <Toolbar>React課題 ②</Toolbar>
    </AppBar>
  );
};

export default Header;
