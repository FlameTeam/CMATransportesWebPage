import React from "react";
import PropTypes from "prop-types";

import buttonStyle from "../../resources/styles/subcomponents/buttonStyle";

import { Grid, Button } from "@material-ui/core";

const ButtonColumn = ({ button }) => {
  const buttonClass = buttonStyle();

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      container
      alignItems="center"
      direction="column"
      justify="center"
      className={buttonClass.background}
    >
        <Button className={buttonClass.buttonHeader}>{button.title}</Button>

    </Grid>
  );
};

ButtonColumn.propTypes = {
    button: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  };

export default ButtonColumn;
