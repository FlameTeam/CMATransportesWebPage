import React, { Fragment } from "react";

import useStyles from "../../resources/styles/subcomponents/servicesCardStyle";
import buttonStyle from "../../resources/styles/subcomponents/buttonStyle";

import { Grid, Typography, Button } from "@material-ui/core";

const Services = ({ card }) => {
  const mainClasses = useStyles();
  const buttonClass = buttonStyle();

  const services = card.services;

  return (
    <Grid
      item
      lg={5}
      container
      alignItems="center"
      direction="column"
      className={mainClasses.background}
    >
      <Fragment>
        <Typography variant="h2" color="textPrimary">
          {card.title}
        </Typography>
        <Typography variant="body1">
          <ul>
            {services.map((service, i) => {
              return <li key={i}>{service}</li>;
            })}
          </ul>
        </Typography>
        <Typography>
          <Button className={buttonClass.button}>Contratar</Button>
        </Typography>
      </Fragment>
    </Grid>
  );
};

export default Services;
