import React from "react";
import { sectionTitlesData } from "../../content-data/subcomponents/sectionTitlesData";
import useStyles from "../../styles/subcomponents/sectionTitleStyles";
import { selectStyle, importData } from "../../functions/functions";

const SectionTitle = ({ section }) => {
  const classes = useStyles();

  const titleData = importData(section, sectionTitlesData);
  const titleStyle = selectStyle(titleData.color, classes);

  return <h1 className={titleStyle}>{titleData.title}</h1>;
};

export default SectionTitle;
