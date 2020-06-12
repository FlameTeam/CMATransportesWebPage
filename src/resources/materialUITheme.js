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

    body1: {
      color: "#000201", //Black
    },

    h1: {
      [breakpoints.up("xs")]: {},
      [breakpoints.up("sm")]: {},
      [breakpoints.up("md")]: {},
      [breakpoints.up("lg")]: {
        fontSize: "2em",
      },
    },

    h2: {
      [breakpoints.up("xs")]: {},
      [breakpoints.up("sm")]: {},
      [breakpoints.up("md")]: {},
      [breakpoints.up("lg")]: {
        fontSize: "1.5em",
      },
    },
  },
});
