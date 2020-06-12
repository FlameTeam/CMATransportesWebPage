import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "#0228AF",
    color: "#FFFFFF",
    textTransform: "capitalize",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "100px",
    padding: "0.1em 1em",

    "&:hover": {
      background: "#FFFFFF",
      color: "#0228AF",
    },

    [theme.breakpoints.up("xs")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.1em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2em",
    },
  },
}));

export default useStyles;
