import React from "react";
import PropTypes from "prop-types";

import useStyles from "../resources/styles/sectionsStyles";
import { selectStyle } from "../functions/functions";

import { menuListItemData } from "../resources/data/menuListItemData";
import MenuListItem from "./subcomponents/navbar/MenuListItem";

import { AppBar, Toolbar } from "@material-ui/core";

const Navbar = ({ backgroundSection }) => {
  const classes = useStyles();
  const sectionStyle = selectStyle(backgroundSection, classes);

  return (
    <AppBar position="static">
      <Toolbar>
        <h1>Flame</h1>

        <ul>
          {menuListItemData.map((listItem, i) => {
            return <MenuListItem key={i} content={listItem.content} />;
          })}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

Navbar.propTypes = {
  backgroundSection: PropTypes.string.isRequired,
};
