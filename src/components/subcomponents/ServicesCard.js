import React from "react";

// import useStyles from "../../resources/styles/subcomponents/servicesCardStyle";

import { Grid, Typography } from "@material-ui/core";

const Services = ({ card }) => {
  //   const classes = useStyles();

  const services = card.services;

  return (
    <Grid item lg={6}>
      <Typography variant="h2">{card.title}</Typography>
      <ul>
        {services.map((service, i) => {
          return <li key={i}>{service}</li>;
        })}
      </ul>
    </Grid>
  );
};

export default Services;
