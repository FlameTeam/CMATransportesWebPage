import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blue: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3em",
    },
  },
  white: {
    backgroundColor: "#FFFFFF",


    [theme.breakpoints.up("xs")]: {
      padding: "4em 2em 6em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "4em 2em 5em 2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "5em 3em 10em 3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "5em 3em 10em 3em",
    },
  },

  footer: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      padding: "1em 1em 3em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "4em 2em 5em 2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1em 3em 3em 3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "2em 2em 3em 2em",
    },
  },
}));

export default useStyles;
