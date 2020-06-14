import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
      maxWidth: "220px",
      marginTop:"1em",
      margin:"1em",

    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "300px",
        minWidth:"220px",
        margin:"1.2em",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "310px",
      minWidth:"200px",
      margin:"auto",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "310px",
      minWidth:"240px",
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
    },
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

export default useStyles;
