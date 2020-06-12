import React from "react";
import Title from "./subcomponents/Title";
import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box } from "@material-ui/core";

const Services = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle}>
      <Title section="services" />
    </Box>
  );
};

export default Services;
