import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    [theme.breakpoints.up("xs")]: {
      padding: "2em 3em 1em 1em",
      maxWidth: "none",
    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "none",
        minWidth:"170px",
        padding: "1em 0.5em",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "none",
      minWidth:"200px",
      padding: "2em 1em"
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "none",
      minWidth:"200px",
      margin:"1em",
      marginTop: "3em",
    },
  },
  
  line: {
    border: "1px solid #0228AF",
    background: "#0228AF",
    width:"100%",

    [theme.breakpoints.up("xs")]: {
      marginBottom: "1.2em",
      maxWidth:"90%",
      
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth:"100%",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
        marginBottom: "1.5em",
    },
  },
}));

export default useStyles;
