import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hamburgerMenu: {
    [theme.breakpoints.up("xs")]: {
      width: "50px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "60px",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
