import React from "react";
import PropTypes from "prop-types";

// import useStyles from "../../../resources/styles/subcomponents/menuListItem";

const MenuListItem = ({ content }) => {
  return <li>{content}</li>;
};

export default MenuListItem;

MenuListItem.propTypes = {
  content: PropTypes.string.isRequired,
};
