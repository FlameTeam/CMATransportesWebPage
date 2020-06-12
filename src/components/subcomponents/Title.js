import React from "react";
import { titlesData } from "../../resources/data/subcomponents/sectionTitlesData";
import { selectStyle, importData } from "../../functions/functions";
import useStyles from "../../resources/styles/subcomponents/sectionTitleStyles";

import { Typography } from "@material-ui/core";

const Title = ({ section }) => {
  const classes = useStyles();

  const titleData = importData(section, titlesData);
  const titleStyle = selectStyle(titleData.color, classes);

  return (
    <Typography variant="h1" className={titleStyle}>
      {titleData.title}
    </Typography>
  );
};

export default Title;
