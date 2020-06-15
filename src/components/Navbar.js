import React from "react";
import PropTypes from "prop-types";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";
import HamburgerMenu from "./subcomponents/navbar/HamburgerMenu";

import { AppBar, Toolbar, Grid } from "@material-ui/core";

const Navbar = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <AppBar position="static">
      <Toolbar className={sectionStyle}>
        <Grid container alignItems="center">
          <Grid item xs={10} md={5}>
            <Logo />
          </Grid>
          <Grid item xs={2} md={7}>
            <Menu />
            <HamburgerMenu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

Navbar.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};
