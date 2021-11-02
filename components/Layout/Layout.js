import classes from "./Layout.module.css";
import { Grid } from "@material-ui/core";
import SideBar from "./sideBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MenuRounded";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import theme from "./theme";

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  function handleDrawerToggle() {
    setOpen(!open);
  }

  return (
    <section className={classes.Layout}>
      <Grid className={classes.topBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
          </Hidden>

          <img src="/logo.svg" alt="logo" className={classes.logo} />

          <Typography
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.fontSize * 1.5,
            }}
          >
            MusicOlogy
          </Typography>

          <div className={classes.grow} />
        </Toolbar>
      </Grid>

      <Hidden mdUp>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          classes={{
            paper: classes.drawerPaper,
          }}
          open={open}
          onClose={handleDrawerToggle}
        >
          <SideBar />
        </Drawer>
      </Hidden>

      <Hidden smDown>
        <Grid className={classes.sideBar}>
          <SideBar />
        </Grid>
      </Hidden>
      <Grid className={classes.main}>{props.children}</Grid>
    </section>
  );
};

export default Layout;
