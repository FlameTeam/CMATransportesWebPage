import React from "react";
import PropTypes from "prop-types";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";

import { AppBar, Toolbar, Grid } from "@material-ui/core";

const Navbar = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <AppBar position="static">
      <Toolbar className={sectionStyle}>
        <Grid container alignItems="center">
          <Grid item md={5}>
            <Logo />
          </Grid>
          <Grid item md={7}>
            <Menu />
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
