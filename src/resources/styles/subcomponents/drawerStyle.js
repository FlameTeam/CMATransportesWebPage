import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    paddingTop: "1em",
    height: "100%",
    background: "#FFFFFF",
  },

  drawerLink: {
    cursor: "pointer",
    padding: "0.5em 2em",
    marginBottom: "0.5em",
    color: "#2269F1",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStyles;
