import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "0.3em 0",
    },
    [theme.breakpoints.up("xs")]: {
      padding: "0.2em 0",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0.2em 0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0.3em 0",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0.4em 0",
    },
  },

  contact: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4em 5em",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "4em 7em",
    },
  },

  blue: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4em 5em",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "4em 7em",
    },
  },

  white: {
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.up("xs")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em 2em 4em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "4em 4em 6em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "5em 5em 7em",
    },
  },

  header: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      padding: "7em 1.5em 3em 1.5em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "7em 2em 3em 2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "10em 3em 3em 5em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "15em 3em 7em 3em",
    },
  },

  footer: {
    backgroundColor: "#FFFFFF",

    [theme.breakpoints.up("xs")]: {
      padding: "1em 1em 3em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1em 2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1em 3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1em 2em",
    },
  },
}));

export default useStyles;
