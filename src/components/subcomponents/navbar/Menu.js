import React from "react";

import { menuData } from "../../../resources/data/menuData";
import { Typography } from "@material-ui/core";

import useStyles from "../../../resources/styles/subcomponents/menuStyle";

const Menu = () => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {menuData.map((listItem, i) => {
        return (
          <Typography key={i}>
            <li className={classes.listItemLink}>{listItem.content}</li>
          </Typography>
        );
      })}
    </ul>
  );
};

export default Menu;
