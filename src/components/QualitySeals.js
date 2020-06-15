import React from "react";
import PropTypes from "prop-types";

import Title from "./subcomponents/Title";
import QualityCard from "./subcomponents/QualityCard";
import { qualityCardData } from "../resources/data/qualityCardData";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box, Grid } from "@material-ui/core";

const QualitySeals = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle}>
      <Title section="quality-seals" />
      <Title section="quality-seals-sub" />
      <Grid container justify="space-around">
        {qualityCardData.map((card, i) => {
          return <QualityCard key={i} card={card} />;
        })}
      </Grid>
    </Box>
  );
};

QualitySeals.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};

export default QualitySeals;
