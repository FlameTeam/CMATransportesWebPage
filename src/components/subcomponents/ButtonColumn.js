import React from "react";
import PropTypes from "prop-types";

import buttonStyle from "../../resources/styles/subcomponents/buttonStyle";
import { Link } from "react-scroll";
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
      className={buttonClass.backgroundHeader}
    >
      <Link
        activeClass="active"
        to={button.action}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1100}
      >
        <Button className={buttonClass.buttonHeader}>{button.title}</Button>
      </Link>

    </Grid>
  );
};

ButtonColumn.propTypes = {
    button: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  };

export default ButtonColumn;
