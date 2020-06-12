import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

export const theme = createMuiTheme({
  typography: {
    h1: {
      [breakpoints.up("xs")]: {},
      [breakpoints.up("sm")]: {},
      [breakpoints.up("md")]: {},
      [breakpoints.up("lg")]: {
        fontSize: "2em",
      },
    },
  },
});
