import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    [theme.breakpoints.up("xs")]: {
      padding: "2em 1em",
      maxWidth: "330px",

    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "210px",
        minWidth:"150px",
        padding: "1em 1em",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "240px",
      minWidth:"100px",
      padding: "2em 1em"
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
