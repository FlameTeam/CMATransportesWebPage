import React from "react";
import PropTypes from "prop-types";

import Title from "./subcomponents/Title";
import ContactElement from "./subcomponents/ContactElement";

import { contactData } from "../resources/data/contactData";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { Box, Grid } from "@material-ui/core";

const Contact = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <Box className={sectionStyle} id="contact">
      <Title section="contact" />
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-around"
      >
        {contactData.map((element, i) => {
          return <ContactElement key={i} element={element} />;
        })}
      </Grid>
    </Box>
  );
};

export default Contact;

Contact.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};
