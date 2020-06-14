import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.35)",

    [theme.breakpoints.up("xs")]: {
      padding: "3em 1em",
      maxWidth: "220px",
      marginTop:"1em",
      margin:"1em",

    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "300px",
        minWidth:"220px",
        margin:"1.2em",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "310px",
      minWidth:"200px",
      margin:"auto",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "310px",
      minWidth:"240px",
      margin:"1em",
      marginTop: "3em",
    },
  },

  image: {
    width:"160px",
    marginBottom: "2.5em",

    [theme.breakpoints.down("xs")]: {
        maxWidth: "90px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "90px",
    },
    [theme.breakpoints.down("md")]: {
        width: "100px",
        marginBottom: "1em",
    },
    [theme.breakpoints.down("lg")]: {
        width: "110px",
        marginBottom: "2em",
    }
  },

  listItem: {
    marginBottom: "0.5em",
  },
}));

export default useStyles;
