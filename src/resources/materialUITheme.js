import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#0454EF", //Blue
      secondary: "#FFFFFF", //White
    },
  },

  typography: {
    fontFamily: "Lato",

    h1: {
      [breakpoints.up("xs")]: {
        fontSize: "2.2em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "2.3em",
      },
      [breakpoints.up("md")]: {
        fontSize: "2.4em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "2.5em",
      },
    },

    h2: {
      [breakpoints.up("xs")]: {
        fontSize: "1.2em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.3em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1.5em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.7em",
      },
    },

    body1: {
      color: "#000201", //Black

      [breakpoints.up("xs")]: {},
      [breakpoints.up("sm")]: {
        fontSize: "0.9em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.1em",
      },
    },

    subtitle1: {

      [breakpoints.up("xs")]: {
        fontSize: "1em",
        marginTop:"3em",
        marginBottom:"1em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.1em",
        marginTop:"2.2em",
        marginBottom:"2.5em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1.2em",
        marginTop:"1.5em",
        marginBottom:"4em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.3em",
        marginTop:"2em",
        marginBottom:"3em",
      }
    },

    subtitle2: {
      [breakpoints.up("xs")]: {
        fontSize: "1em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.1em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1.1em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.2em",
      },
    },
  },
});
