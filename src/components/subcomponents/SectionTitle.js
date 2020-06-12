import React from "react";
import { sectionTitlesData } from "../../content-data/subcomponents/sectionTitlesData";
import { selectStyle, importData } from "../../functions/functions";
import useStyles from "../../styles/subcomponents/sectionTitleStyles";

import { Typography } from "@material-ui/core";

const SectionTitle = ({ section }) => {
  const classes = useStyles();

  const titleData = importData(section, sectionTitlesData);
  const titleStyle = selectStyle(titleData.color, classes);

  return (
    <Typography variant="h1" className={titleStyle}>
      {titleData.title}
    </Typography>
  );
};

export default SectionTitle;
