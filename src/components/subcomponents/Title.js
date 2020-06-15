import React from "react";
import PropTypes from "prop-types";

import { titlesData } from "../../resources/data/titlesData";
import { selectStyle, importSpecificData } from "../../functions/functions";
import useStyles from "../../resources/styles/subcomponents/TitleStyles";

import { Typography } from "@material-ui/core";

const Title = ({ section }) => {
  const classes = useStyles();

  const titleData = importSpecificData(section, titlesData);
  const titleStyle = selectStyle(titleData.color, classes);

  return (
    <Typography variant={titleData.variant} className={titleStyle}>
      {titleData.title}
    </Typography>
  );
};

export default Title;

Title.propTypes = {
  section: PropTypes.string.isRequired,
};
