import React from "react";
import PropTypes from "prop-types";

import { headerData } from "../resources/data/headerData";
import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import LeftSideHeader from "./subcomponents/header/LeftSideHeader";
import RightSideHeader from "./subcomponents/header/RightSideHeader";

import { Box, Grid, useMediaQuery } from "@material-ui/core";

const Header = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);
  const information = headerData[0];
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const order = matches ? (
    <Grid container justify="space-around">
      <LeftSideHeader data={information} />
      <RightSideHeader data={information} />
    </Grid>
  ) : (
    <Grid container justify="space-around">
      <RightSideHeader data={information} />
      <LeftSideHeader data={information} />
    </Grid>
  );

  return (
    <Box className={sectionStyle} id="header">
      {order}
    </Box>
  );
};

Header.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};

export default Header;
