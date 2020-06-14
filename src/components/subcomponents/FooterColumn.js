import React from "react";
import PropTypes from "prop-types";

import useStyles from "../../resources/styles/subcomponents/footerColumnStyle";
import { Grid, Typography } from "@material-ui/core";
import Modal from "./Modal";

const FooterColumn = ({ card }) => {
  const mainClasses = useStyles();
  const informations = card.information;

  return (
    <Grid
      item
      xs={12}
      sm={3}
      md={4}
      lg={3}
      container
      direction="column"
      className={mainClasses.background}
    >

      <Typography variant="h3" color="textPrimary">
        {card.title}
      </Typography>

      <hr className={mainClasses.line} />

      {informations.map(function(information, i) {
        return (
            <Modal key={i} information={information} />
        );
      })}

    </Grid>
  );
};

FooterColumn.propTypes = {
    card: PropTypes.shape({
      title: PropTypes.string.isRequired,
      information: PropTypes.arrayOf(
        PropTypes.shape({
          subtitle: PropTypes.string.isRequired,
          info: PropTypes.string.isRequired,
        })
      )
    }),
  };

export default FooterColumn;
