import React from "react";
import Title from "./subcomponents/Title";
import ServicesCard from "./subcomponents/ServicesCard";

import { servicesCardData } from "../resources/data/servicesCardData";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box, Grid } from "@material-ui/core";

const Services = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle}>
      <Title section="services" />
      <Grid container justify="space-around">
        {servicesCardData.map((card, i) => {
          return <ServicesCard key={i} card={card} />;
        })}
      </Grid>
    </Box>
  );
};

export default Services;
