import React from "react";
import SectionTitle from "./subcomponents/SectionTitle";
import useStyles from "../styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box } from "@material-ui/core";

const Services = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle}>
      <SectionTitle section="services" />
    </Box>
  );
};

export default Services;
