import React from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import useStyles from "../../../resources/styles/subcomponents/servicesCardStyle";
import buttonStyle from "../../../resources/styles/subcomponents/buttonStyle";
import { Grid, Typography, Button } from "@material-ui/core";

import privateTransport from "../../../resources/images/private-transport.svg";
import turism from "../../../resources/images/turism.svg";

const ServicesCard = ({ card }) => {
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
      sm={7}
      md={5}
      lg={4}
      xl={5}
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

      <Link
        activeClass="active"
        to={card.link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1100}
      >
        <Button className={buttonClass.button}>Contratar</Button>
      </Link>
    </Grid>
  );
};

export default ServicesCard;

ServicesCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
  }),
};
