import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import Logo from "./subcomponents/navbar/Logo";
import Menu from "./subcomponents/navbar/Menu";
import HamburgerMenu from "./subcomponents/navbar/HamburgerMenu";
import Drawer from "./subcomponents/navbar/Drawer";

import { AppBar, Toolbar, Grid } from "@material-ui/core";

const Navbar = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  const [drawerState, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawerState);
  };

  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar className={sectionStyle}>
          <Grid container alignItems="center">
            <Grid item xs={10} md={5} lg={6}>
              <Logo />
            </Grid>
            <Grid item xs={2} md={7} lg={6}>
              <Menu />
              <HamburgerMenu toggleDrawer={toggleDrawer} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer drawerState={drawerState} toggleDrawer={toggleDrawer} />
    </Fragment>
  );
};

export default Navbar;

Navbar.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};
