import React from "react";
import PropTypes from "prop-types";

import { subtitlesData } from "../../resources/data/titlesData";
import { selectStyle, importSpecificData } from "../../functions/functions";
import useStyles from "../../resources/styles/subcomponents/TitleStyles";

import { Typography } from "@material-ui/core";

const Subtitle = ({ section }) => {
  const classes = useStyles();

  const subtitleData = importSpecificData(section, subtitlesData);
  const subtitleStyle = selectStyle(subtitleData.color, classes);

  return (
    <Typography variant="subtitle1" className={subtitleStyle} >
      {subtitleData.title}
    </Typography>
  );
};

export default Subtitle;

Subtitle.propTypes = {
  section: PropTypes.string.isRequired,
};
