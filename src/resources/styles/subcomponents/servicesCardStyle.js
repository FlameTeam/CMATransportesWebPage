import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#FFFFFF",

    borderRadius: "20px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
      maxWidth: "360px",
      marginTop: "1em",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "3em 1em",
      maxWidth: "350px",
      margin: "1em",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "380px",
      padding: "3em 1em",
      margin: "1em 2em",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "none",
      padding: "3em 4em",
      marginTop: "3em",
    },
  },

  image: {
    borderRadius: "20px",
    marginBottom: "1em",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.10)",
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },

  listItem: {
    marginBottom: "0.5em",
  },
}));

export default useStyles;
