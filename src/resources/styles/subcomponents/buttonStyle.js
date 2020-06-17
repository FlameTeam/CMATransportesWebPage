import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#2269F1",
    color: "#FFFFFF",
    textTransform: "capitalize",
    borderRadius: "100px",
    padding: "0.1em 1em",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    "&:hover": {
      background: "#FFFFFF",
      color: "#0228AF",
    },

    [theme.breakpoints.up("xs")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
    },
  },

  backgroundHeader: {
    [theme.breakpoints.up("xs")]: {
      padding: "2em 3em 1em 1em",
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "none",
      minWidth:"170px",
      padding: "1em 0.5em",
      margin:"0em 2em"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "none",
      minWidth:"200px",
      padding: "2em 1em"
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "300px",
      minWidth:"200px",
      margin:"1em",
      marginTop: "1em",
    },
  },
  
  buttonHeader: {
    background: "#2269F1",
    color: "#FFFFFF",
    textTransform: "capitalize",
    borderRadius: "100px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    "&:hover": {
      background: "#FFFFFF",
      color: "#0228AF",
    },

    [theme.breakpoints.up("xs")]: {
      margin:"0em 1em -1em 2em",
      minWidth:"15em",
      fontSize: "0.9em",
      padding: "0.3em 2em",
    },
    [theme.breakpoints.up("sm")]: {
      margin:"0em 1em 0em 0em",
      minWidth:"13em",
      fontSize: "1em",
      padding: "0.08em 1em",
    },
    [theme.breakpoints.up("lg")]: {
      margin:"0em 1em 0em 0em",
      minWidth:"13em",
      fontSize: "1.1em",
      padding: "0.1em 1em",

    },
  },
}));

export default useStyles;