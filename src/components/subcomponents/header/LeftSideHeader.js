import React from "react";
import PropTypes from "prop-types";

import Title from "../Title";
import ButtonColumn from "../ButtonColumn";

import { Grid } from "@material-ui/core";


const LeftSideHeader = ({ data }) => {

  return (
    <Grid
        item
        xs={12}
        sm={12}
        md={7}
        lg={7}
        container
        alignItems="center"
        align="center"
        direction="column"
        >

        <Title section="header" />
        <Title section="header-sub" />
        <Grid container justify="space-evenly">
            {data.buttons.map(function(button, i) {
                return (
                    <ButtonColumn key={i} button={button} />
                );
            })}
        </Grid>
    </Grid>

  );
};

export default LeftSideHeader;

LeftSideHeader.propTypes = {
    data: PropTypes.shape({
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
            title: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            })
        )
    }),
};
