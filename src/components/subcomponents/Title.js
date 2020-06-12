import React from "react";
import { titlesData } from "../../resources/data/titlesData";
import { selectStyle, importSpecificData } from "../../functions/functions";
import useStyles from "../../resources/styles/subcomponents/TitleStyles";

import { Typography } from "@material-ui/core";

const Title = ({ section }) => {
  const classes = useStyles();

  const titleData = importSpecificData(section, titlesData);
  const titleStyle = selectStyle(titleData.color, classes);

  return (
    <Typography variant="h1" className={titleStyle}>
      {titleData.title}
    </Typography>
  );
};

export default Title;
