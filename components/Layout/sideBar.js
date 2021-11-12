import classes from "./sideBar.module.css";
import Link from "next/link";
import HomeIcon from "../icons/Home";
import MuiLink from "@material-ui/core/Link"
import AlbumIcon from "../icons/Albums";
import TopIcon from "../icons/Top";
import TrackIcon from "../icons/Tracks";
import PlaylistIcon from "../icons/Playlist";
import GenresIcon from "../icons/Genres";
import PlayingQueue from "../icons/Playing";
import ArtistIcon from "../icons/Artists";
import HelpIcon from "../icons/help";
import SettingsIcon from "../icons/settings";
import SubscribeIcon from "../icons/subscribe";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import LibraryMusic from "@material-ui/icons/LibraryMusic";
import {
  DeleteForeverOutlined,
  DeleteTwoTone,
  HelpOutline,
  HelpOutlineRounded,
  HelpRounded,
  HelpSharp,
  HelpTwoTone,
  InboxRounded,
  LiveHelp,
  MailOutline,
  Settings,
  SettingsApplicationsOutlined,
} from "@material-ui/icons";
import theme from "./theme";



const SideBar = () => {
  return (
    <section className={classes.main}>
      <section className={classes.Links}>
        <section style={{ position: "relative", width: "100%", height: "90%" }}>
          <ul className={classes.ul}>
            <List>
              {[
                { name:"Home", route:"/home"},
                { name:"Library", route:"/LibraryPage"},
                { name:"Playing Queue", route:"/"},
              ].map((item, index) => ( 
                <Link href={item.route} key={item.name}>
                  <ListItem button>
                    <ListItemIcon>
                        {index === 0 && <HomeIcon />}
                        {index === 1 && <AlbumIcon />}
                       {index === 2 && <PlayingQueue />}
                    </ListItemIcon>
                    <ListItemText primary={item.name} className={classes.LinkText} />
                  </ListItem>
                </Link>
              ))}
              <Divider style={{ backgroundColor: "white" }} />
              {[
                { name:"Subscription", route:"/"},
                { name:"Settings", route:"/"},
                { name:"Help", route:"/"},
              ].map((item, index) => ( 
                <Link href={item.route} key={item.name}>
                  <ListItem button>
                    <ListItemIcon>
                        {index === 0 && <SubscribeIcon />}
                        {index === 1 && <Settings  style={{color:"white"}}/>}
                       {index === 2 && <HelpRounded style={{color:"white"}}/>}
                    </ListItemIcon>
                    <ListItemText primary={item.name} className={classes.LinkText} />
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
            <MuiLink
              color="inherit"
              href="https://music-ology-2-0.vercel.app/"  
            >
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
