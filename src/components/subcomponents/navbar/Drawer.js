import React from "react";
import PropTypes from "prop-types";

import { Box, ListItem, List, Typography } from "@material-ui/core";
import MaterialUIDrawer from "@material-ui/core/Drawer";

import useStyles from "../../../resources/styles/subcomponents/drawerStyle.js";

const Drawer = ({ drawerState, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <MaterialUIDrawer anchor="right" open={drawerState} onClose={toggleDrawer}>
      <Box
        className={classes.drawer}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          <Typography>
            <ListItem onClick={toggleDrawer} className={classes.drawerLink}>
              Inicio
            </ListItem>
            <ListItem onClick={toggleDrawer} className={classes.drawerLink}>
              Servicios
            </ListItem>
            <ListItem onClick={toggleDrawer} className={classes.drawerLink}>
              Contacto
            </ListItem>
            <ListItem onClick={toggleDrawer} className={classes.drawerLink}>
              Nuestro Equipo
            </ListItem>
            <ListItem onClick={toggleDrawer} className={classes.drawerLink}>
              Saber Más
            </ListItem>
          </Typography>
        </List>
      </Box>
    </MaterialUIDrawer>
  );
};

export default Drawer;

Drawer.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func,
};
