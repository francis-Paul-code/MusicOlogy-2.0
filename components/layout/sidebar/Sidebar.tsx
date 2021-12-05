import React, { JSXElementConstructor, ReactElement } from "react";
import { useStyles } from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "../../../routes";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { RouteType } from "../../../types/common";
import Hidden from "@material-ui/core/Hidden";
import theme from "../../../theme";
import { Container } from "@material-ui/core";

type SideBarItem = {
  route: RouteType;
};

type Sidebar = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{ fontWeight: "bold" }}>
      <Link color="inherit" href="https://muzicology.herokuapp.com/">
        &copy;Musicology {new Date().getFullYear()} | All Rights Reserved
      </Link>
    </Typography>
  );
}

export default function Sidebar({ children }: Sidebar) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const SideBarItem = ({ route }: SideBarItem) => {
    const router = useRouter();
    return (
      <ListItem
        button
        onClick={() => router.push(route.path)}
        style={{
          backgroundColor:
            router.pathname === route.path ? theme.palette.secondary.main : "",
          borderRadius: 10,
        }}
      >
        <ListItemIcon>{route.icon}</ListItemIcon>
        <ListItemText primary={route.name} />
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <img
            src="/logo.svg"
            alt="logo"
            className={classes.logo}
            style={{ width: "4%", margin: "0 5px" }}
          />

          <Typography style={{}}>MusicOlogy</Typography>

          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

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
          <Toolbar />
          <div>
            <List>
              {routes?.main.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Divider />
            <List style={{ borderTop: " 2% solid white" }}>
              {routes?.others.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Box style={{ position: "absolute", bottom: 20, left: 10 }}>
              <Copyright />
            </Box>
          </div>
        </Drawer>
      </Hidden>

      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div>
            <List>
              {routes?.main.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Divider />
            <List style={{ borderTop: " 2% solid white" }}>
              {routes?.others.map((route) => (
                <SideBarItem route={route} key={route.path} />
              ))}
            </List>
            <Box style={{ position: "absolute", bottom: 20, left: 10 }}>
              <Copyright />
            </Box>
          </div>
        </Drawer>
      </Hidden>
      <Container className={classes.content}>
        <Toolbar />
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
