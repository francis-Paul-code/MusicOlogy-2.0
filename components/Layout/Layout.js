import classes from "./Layout.module.css";
import { Grid } from "@material-ui/core";
import SideBar from "./sideBar";

const Layout = (props) => {
  return (
    <section className={classes.Layout}>
      <Grid className={classes.sideBar}>
        <SideBar />
      </Grid>
      <Grid className={classes.main}>
        {props.children}
      </Grid>
    </section>
  );
};

export default Layout;
