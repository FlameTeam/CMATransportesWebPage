import React from "react";

import useStyles from "../../resources/styles/subcomponents/servicesCardStyle";
import buttonStyle from "../../resources/styles/subcomponents/buttonStyle";
import { Grid, Typography, Button } from "@material-ui/core";

import privateTransport from "../../resources/images/private-transport.svg";
import turism from "../../resources/images/turism.svg";

const Services = ({ card }) => {
  const mainClasses = useStyles();
  const buttonClass = buttonStyle();

  let image = "";
  card.image === "private-transport.svg"
    ? (image = privateTransport)
    : (image = turism);

  const services = card.services;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={5}
      lg={4}
      container
      alignItems="center"
      direction="column"
      className={mainClasses.background}
    >
      <img alt={card.image} src={image} className={mainClasses.image} />

      <Typography variant="h2" color="textPrimary" align="center">
        {card.title}
      </Typography>

      <ul>
        <Typography variant="body1">
          {services.map((service, i) => {
            return (
              <li key={i} className={mainClasses.listItem}>
                {service}
              </li>
            );
          })}
        </Typography>
      </ul>

      <Typography>
        <Button className={buttonClass.button}>Contratar</Button>
      </Typography>
    </Grid>
  );
};

export default Services;
