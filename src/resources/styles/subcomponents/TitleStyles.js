import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  white: {
    color: "#FFFFFF",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0.4em",
    },
  },

  blue: {
    color: "#2269F1",
  },

  black: {
    color: "#000000",
  },
}));

export default useStyles;
