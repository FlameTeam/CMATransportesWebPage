import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../resources/styles/subcomponents/contactElementStyle";

import { Grid, Box, Typography } from "@material-ui/core";

import instagramIcon from "../../resources/images/instagram-icon.svg";
import whatsappIcon from "../../resources/images/whatsapp-icon.svg";
import mailIcon from "../../resources/images/mail-icon.svg";

const ContactElement = ({ element }) => {
  const classes = useStyles();

  let icon = "";
  switch (element.icon) {
    case "instagram-icon.svg":
      icon = instagramIcon;
      break;

    case "whatsapp-icon.svg":
      icon = whatsappIcon;
      break;

    case "mail-icon.svg":
      icon = mailIcon;
      break;

    default:
      console.log("Invalid option");
  }

  return (
    <Grid item xs={12} sm={8} md={7} lg={8}>
      <Box className={classes.background}>
        <img alt={element.icon} src={icon} className={classes.icon} />
        <Typography variant="h2">{element.content}</Typography>
      </Box>
    </Grid>
  );
};

export default ContactElement;

ContactElement.propTypes = {
  element: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
