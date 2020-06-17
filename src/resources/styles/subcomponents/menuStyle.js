import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyleType: "none",

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {
      display: "flex",
      paddingRight: "2em",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      height: "1.8em",
      marginTop: "1.55em",
    },
  },

  listItemLink: {
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "2px solid white",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
      margin: "1em 0",
    },
  },
}));

export default useStyles;
