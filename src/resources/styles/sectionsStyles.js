import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "0.3em 0",
    },

    [theme.breakpoints.up("md")]: {
      padding: "0.5em 0",
    },
    [theme.breakpoints.up("lg")]: {},
  },

  blue: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4em 3em",
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

  header: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      marginTop: "65px",
      padding: "1em 1em 6em 1em",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "73px",
      padding: "4em 2em 5em 2em",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "81px",
      padding: "5em 3em 6em 3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "8em 3em 8em 3em",
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
