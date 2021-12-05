import classes from "./sideBar.module.css";
import Link from "next/link";
import HomeIcon from "../icons/Home";
import MuiLink from "@material-ui/core/Link";
import GenresIcon from "../icons/Genres";
import PlayingQueue from "../icons/Playing";
import SubscribeIcon from "../icons/subscribe";
import theme from "../../theme";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { HelpRounded, Search, SearchSharp, Settings } from "@material-ui/icons";
import { useRouter } from "next/router";

const SideBar = (props: any) => {
  const router = useRouter();

  const routes = [
    {
      name: "Home",
      href: "/home",
      current: router.pathname.includes("/home"),
    },
    {
      name: "Library",
      href: "/librarypage",
      current: router.pathname.includes("/librarypage"),
    },
    {
      name: "Search",
      href: "/search",
      current: router.pathname.includes("/search"),
    },
    {
      name: "Playing Queue",
      href: "/PlayingQueue",
      current: router.pathname.includes("/PlayingQueue"),
    },
  ];
  const others = [
    {
      name: "Subscriptions",
      href: "/#",
      current: router.pathname.includes("/#"),
    },
    {
      name: "Settings",
      href: "/#",
      current: router.pathname.includes("/#"),
    },
    {
      name: "Help",
      href: "/#",
      current: router.pathname.includes("/#"),
    },
  ];

  return (
    <section className={classes.main}>
      <section className={classes.Links}>
        <section style={{ position: "relative", width: "100%", height: "90%" }}>
          <ul className={classes.ul}>
            <List>
              {routes.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.name}
                  passHref={true}
                  aria-current={item.current ? "page" : undefined}
                >
                  <ListItem button>
                    <ListItemIcon>
                      {index === 0 && item.current ? (
                        <HomeIcon
                          styles={{ fill: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 0 && <HomeIcon />
                      )}
                      {index === 1 && item.current ? (
                        <GenresIcon
                          styles={{ fill: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 1 && <GenresIcon />
                      )}
                      {index === 2 && item.current ? (
                        <SearchSharp
                          style={{ color: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 2 && (
                          <SearchSharp style={{ color: "white" }} />
                        )
                      )}
                      {index === 3 && item.current ? (
                        <PlayingQueue
                          styles={{ fill: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 3 && <PlayingQueue />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      className={classes.LinkText}
                      style={
                        item.current
                          ? { color: theme.palette.secondary.main }
                          : { color: "white" }
                      }
                    />
                  </ListItem>
                </Link>
              ))}
              <Divider style={{ backgroundColor: "white" }} />
              {others.map((item, index) => (
                <Link href={item.href} key={item.name} passHref={true}>
                  <ListItem button>
                    <ListItemIcon>
                      {index === 0 && item.current ? (
                        <SubscribeIcon
                          styles={{ fill: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 0 && <SubscribeIcon />
                      )}
                      {index === 1 && item.current ? (
                        <Settings
                          style={{ color: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 1 && <Settings style={{ color: "white" }} />
                      )}
                      {index === 2 && item.current ? (
                        <HelpRounded
                          style={{ color: theme.palette.secondary.main }}
                        />
                      ) : (
                        index === 2 && (
                          <HelpRounded style={{ color: "white" }} />
                        )
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      className={classes.LinkText}
                      style={
                        item.current
                          ? { color: theme.palette.secondary.main }
                          : { color: "white" }
                      }
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </ul>
        </section>

        <Grid className={classes.End}>
          <Typography
            variant="body2"
            align="center"
            style={{ fontWeight: "bold" }}
            className={classes.copyright}
          >
            <MuiLink color="inherit" href="https://music-ology-2-0.vercel.app/">
              <Typography className={classes.copyright}>
                &copy;Musicology {new Date().getFullYear()}| All Rights Reserved
              </Typography>
            </MuiLink>
          </Typography>
        </Grid>
      </section>
    </section>
  );
};

export default SideBar;
