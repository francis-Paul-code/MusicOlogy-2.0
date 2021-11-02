import classes from "./sideBar.module.css";
import Link from "@material-ui/core/Link";
import Button from "./Button";
import HomeIcon from "../icons/Home";
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
import {Typography} from "@material-ui/core"
import LibraryMusic from "@material-ui/icons/LibraryMusic";



function Copyright() {
  return (
    <Typography variant="body2" align="center" style={{ fontWeight: "bold" }} className={classes.copyright}>
      <Link color="inherit" href="https://music-ology-2-0.vercel.app/">
        &copy;Musicology {new Date().getFullYear()} 
        | All Rights Reserved
      </Link>
    </Typography>
  );
}



const SideBar = () => {
  function active(name){
    const data = querySelectorAll('ul');
    console.log(data);
  }

  return (
    <section className={classes.main}>
      <section className={classes.Links}>
        <ul className={classes.ul}>
          <Button Route="/Home" _Name="Home" startIcon={<HomeIcon />} />
          <Button Route="/Albums" _Name="Library" startIcon={<GenresIcon/>}  />
          <Button Route="/" _Name="Playing Queue" startIcon={<PlayingQueue/>}  />
        </ul>

        <ul className={classes.Footer}>
          <Button Route="/" _Name="Subscription" startIcon={<SubscribeIcon />}  />
          <Button Route="/" _Name="Settings" startIcon={<SettingsIcon />}  />
          <Button Route="/" _Name="Help" startIcon={<HelpIcon />} />
        </ul>

        <div className={classes.End}>
          <Copyright style={{position: 'relative'}}/>
        </div>
      </section>
    </section>
  );
};

export default SideBar;
