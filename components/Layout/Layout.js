import classes from "./Layout.module.css";
import { Grid, styled, useTheme } from "@material-ui/core";
import SideBar from "./sideBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MenuRounded";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import theme from "./theme";
import Link from "next/link";
import Close from "@material-ui/icons/Close";
import { color } from "@material-ui/system";
import { render } from "react-dom";
import classNames from "classnames";

const Layout = (props) => {
  const [open, setOpen] = useState(false);
  function handleDrawerToggle() {
    setOpen(!open);
  }
  const [open1, setOpen1] = useState(true);

  function handleDrawerOpen() {
    setOpen1(true);
  }
  function handleDrawerClose() {
    setOpen1(false);
  }

  let mainShift = {
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
  };
  let CloseSideBar;
  let OpenSideBar;
  if (open1 === true) {
    mainShift = { width: "73vw", right: "2vw" };
    CloseSideBar = (
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={handleDrawerClose}
        sx={{ mr: 2 }}
      >
        <Close className={classes.close} />
      </IconButton>
    );
  } else {
    CloseSideBar = (
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={handleDrawerOpen}
        sx={{ mr: 2 }}
      >
        <MenuIcon className={classes.close} />
      </IconButton>
    );
  }

  return (
    <section className={classes.Layout}>
      <Grid className={classes.topBar}>
        <AppBar
          position="relative"
          style={{
            height: "100%",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          open={open1}
        >
          <Toolbar
            style={{
              position: "relative",
              minHeight: "100%",
              maxHeight: "100%",
            }}
          >
            <Hidden mdUp>
              <IconButton
                edge="start"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon style={{ color: "#fff" }} />
              </IconButton>
            </Hidden>

            <Hidden smDown>
              {OpenSideBar}
              {CloseSideBar}
            </Hidden>

            <Link href="https://music-ology-2-0.vercel.app/">
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "20%",
                  display: "flex",
                  cursor: "pointer",
                }}
              >
                <img src="/logo.svg" alt="logo" className={classes.logo} />
                <div
                  style={{
                    position: "relative",
                    display:"flex",
                    height: "100%",
                    width: "60%",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      margin:'auto 0',
                      color:"#fff",
                      fontWeight: "bold",
                      textAlign:"center",
                      fontFamily: theme.typography.fontFamily,
                      fontSize: theme.typography.fontSize * 1.5,
              
                    }}
                  >
                    MusicOlogy{" "}
                  </span>
                </div>
              </div>
            </Link>
          </Toolbar>
        </AppBar>
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
          <Drawer
            className={classes.drawer}
            variant="persistent"
            classes={{
              paper: classes.drawerPaper2,
            }}
            sx={{
              "& .MuiDrawer-paperAnchorDockedLeft": {
                borderRight: "none !important",
              },
            }}
            open={open1}
          >
            <div className={classes.holder}>
              <SideBar />
            </div>
          </Drawer>
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid className={classes.main} style={mainShift}>
          {props.children}
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid className={classes.main}>{props.children}</Grid>
      </Hidden>
    </section>
  );
};

export default Layout;
