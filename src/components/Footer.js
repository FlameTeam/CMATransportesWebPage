import React from "react";
import PropTypes from "prop-types";

import FooterColumn from "./subcomponents/FooterColumn";
import { footerColumnData } from "../resources/data/footerColumnData";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box, Grid } from "@material-ui/core";

const Footer = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle} id="aboutus">
      <Grid container justify="space-around">
        {footerColumnData.map((card, i) => {
          return <FooterColumn key={i} card={card} />;
        })}
      </Grid>
    </Box>
  );
};

Footer.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};

export default Footer;
