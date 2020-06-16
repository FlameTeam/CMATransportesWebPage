import React from "react";
import PropTypes from "prop-types";
import useStyles from "../../../resources/styles/subcomponents/imageStyle";
import { Grid } from "@material-ui/core";

const RightsideHeader = ({ data }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={10}
      sm={12}
      md={5}
      lg={5}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <img alt={data.image} src={data.image} className={classes.image} />
    </Grid>
  );
};

export default RightsideHeader;

RightsideHeader.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }),
};
