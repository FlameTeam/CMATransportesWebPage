import React from "react";

import cmaLogo from "../../../resources/images/cma-logo.svg";

import { Box } from "@material-ui/core";

import useStyles from "../../../resources/styles/subcomponents/logoStyle";

export default function Logo() {
  const classes = useStyles();

  return (
    <Box className={classes.logoBox}>
      <img alt="cma-transportes" src={cmaLogo} className={classes.image} />
    </Box>
  );
}
