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
        fontSize: "1.8em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "2em",
      },
      [breakpoints.up("md")]: {
        fontSize: "2.2em",
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

    h3: {
      [breakpoints.up("xs")]: {
        marginTop:"1.4em", 
        marginBottom:"0.5em", 
        fontSize: "1em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.1em",
        marginTop:"4em", 
      }
    },

    h4: {
      [breakpoints.up("xs")]: {
        textAlign:"center",
        fontSize: "1em",
      },
      [breakpoints.up("sm")]: {
        textAlign:"left",
        fontSize: "1em",
      },
      [breakpoints.up("md")]: {
        textAlign:"left",
        fontSize: "1em",
      },
      [breakpoints.up("lg")]: {
        textAlign:"left",
        fontSize: "1em",
      },
    },

    body1: {
      color: "#000201", //Black

      [breakpoints.up("xs")]: {},
      [breakpoints.up("sm")]: {
        fontSize: "1em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.1em",
      },
    },

    body2: {  
      [breakpoints.up("xs")]: {
        textAlign:"center",
        fontSize: "0.8em",
        marginBottom:"0.4em",
      },
      [breakpoints.up("sm")]: {
        textAlign:"left",
        fontSize: "0.8em",
        marginBottom:"0.6em",
      },
      [breakpoints.up("md")]: {
        textAlign:"left",
        fontSize: "0.8em",
        marginBottom:"0.5em",
      },
      [breakpoints.up("lg")]: {
        textAlign:"left",
        fontSize: "0.85em",
        marginBottom:"0.7em",
      },
    },

    subtitle1: {

      [breakpoints.up("xs")]: {
        fontSize: "1em",
        marginTop:"1.4em",
        marginBottom:"1em",
      },
      [breakpoints.up("sm")]: {
        fontSize: "1.1em",
        marginTop:"1.2em",
        marginBottom:"2.5em",
      },
      [breakpoints.up("md")]: {
        fontSize: "1.2em",
        marginTop:"1.2em",
        marginBottom:"4em",
      },
      [breakpoints.up("lg")]: {
        fontSize: "1.3em",
        marginTop:"20px",
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

  overrides: {
    MuiTypography:{
      h6:{
        fontWeight: "bold"
      }      
    },

    MuiDialogActions: {
      root: {
        padding:"8px 8px 12px",
        justifyContent: "center"
      },
    },
  },
});
