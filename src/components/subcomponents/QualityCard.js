import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../resources/styles/subcomponents/qualityCardStyle";
import { Grid, Typography } from "@material-ui/core";


const QualityCard = ({ card }) => {
  const mainClasses = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={2}
      lg={2}
      container
      alignItems="center"
      direction="column"
      className={mainClasses.background}
    >
      <img alt={card.image} src={card.image} className={mainClasses.image} />

      <Typography variant="subtitle2" align="center">
        {card.title}
      </Typography>

    </Grid>
  );
};

export default QualityCard;

QualityCard.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
