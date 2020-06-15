import React from "react";

import hamburgerMenuIcon from "../../../resources/images/hamburger-menu-icon.svg";

import { IconButton } from "@material-ui/core";

import useStyles from "../../../resources/styles/subcomponents/hamburgerMenuStyle";

const HamburgerMenu = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.hamburgerMenu} onClick={toggleDrawer}>
      <img alt="hamburger-menu" src={hamburgerMenuIcon} />
    </IconButton>
  );
};

export default HamburgerMenu;
