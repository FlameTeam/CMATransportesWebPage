import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#FFFFFF",
    color: "#0228AF",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    [theme.breakpoints.up("xs")]: {
      padding: "1em 0 ",
      marginTop: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1em 0 ",
      marginTop: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "1em 0 ",
      marginTop: "2em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1em 0 ",
      marginTop: "2.5em",
    },
  },

  icon: {
    [theme.breakpoints.up("xs")]: {
      width: "25px",
      marginRight: "0.6em",
    },
    [theme.breakpoints.up("sm")]: {
      width: "30px",
      marginRight: "0.6em",
    },
    [theme.breakpoints.up("md")]: {
      width: "35px",
      marginRight: "0.7em",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40px",
      marginRight: "0.8em",
    },
  },
}));

export default useStyles;
