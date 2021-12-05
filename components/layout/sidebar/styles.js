import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    "& .MuiDivider-root": {
      background: "#FFFFFF",
      margin: "0 5px 0 15px",
    },
  },
  appBar: {
    boxShadow: "none",
    zIndex: 1600,
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    height: 20,
  },
  drawer: {
    width: 275,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 275,
    borderRight: "none",
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.primary.main,
    padding: "0 5px 0 10px",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  menuIcon: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  subheader: {
    textTransform: "uppercase",
  },
  content: {
    position: "relative",
    overflow: "auto",
    height: "96vh",
    top: "2vh",
    width: "100%",
  },
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "98%",
    padding: "2%",
    margin: "0 auto",
    borderRadius: 15,
    backgroundColor: "#06142b",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export { useStyles };
