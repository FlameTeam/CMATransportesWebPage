import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#FFFFFF",

    borderRadius: "20px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
      maxWidth: "360px",
      margin: "1.5em 0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "3em 1em",
      maxWidth: "350px",
      margin: "1.5em 4%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "380px",
      padding: "3em 1em",
      margin: "2em 4%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "400px",
      padding: "3em 4em",
      margin: "3em 5%",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "420px",
      margin: "3em 6%",
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
