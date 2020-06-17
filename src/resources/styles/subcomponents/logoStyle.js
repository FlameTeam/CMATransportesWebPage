import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  image: {
    [theme.breakpoints.up("xs")]: {
      height: "50px",
      marginLeft: "-1em",
    },
    [theme.breakpoints.up("sm")]: {
      height: "50px",
      marginLeft: "6%",
    },
    [theme.breakpoints.up("md")]: {
      height: "60px",
      marginLeft: "0",
    },
    [theme.breakpoints.up("lg")]: {
      height: "70px",
    },
  },
}));

export default useStyles;
