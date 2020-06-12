import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blue: {
    backgroundColor: "#2269F1",

    [theme.breakpoints.up("xs")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "2em",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3em",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3em",
    },
  },
  white: {
    backgroundColor: "#FFFFFF",
  },
}));

export default useStyles;
