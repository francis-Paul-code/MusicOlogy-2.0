import classes from "./sideBar.module.css";
import Link from "next/link";
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

const SideBar = () => {
  function active(name){
    const data = querySelectorAll('ul');
    console.log(data);
  }

  return (
    <section className={classes.main}>
      <Link href="/"><div className={classes.Logo}></div></Link>

      <section className={classes.Links}>
        <ul className={classes.ul}>
          <Button className={classes.active} Route="/" _Name="Home" startIcon={<HomeIcon />} onClick={active} />
          <Button Route="/" _Name="Top 100" startIcon={<TopIcon />} onClick={active} />
          <Button Route="/Albums" _Name="Albums" startIcon={<AlbumIcon />} onClick={active} />
          <Button Route="/Artists" _Name="Artists" startIcon={<ArtistIcon />} onClick={active} />
          <Button Route="/Tracks" _Name="Tracks" startIcon={<TrackIcon />} onClick={active} />
          <Button Route="/Genres" _Name="Genres" startIcon={<GenresIcon/>} onClick={active} />
          <Button Route="/" _Name="PlayLists" startIcon={<PlaylistIcon />} onClick={active} />
          <Button Route="/" _Name="Playing Queue" startIcon={<PlayingQueue />} onClick={active} />
        </ul>

        <ul className={classes.Footer}>
          <Button Route="/" _Name="Subscription" startIcon={<SubscribeIcon />} onClick={active} />
          <Button Route="/" _Name="Settings" startIcon={<SettingsIcon />} onClick={active} />
          <Button Route="/" _Name="Help" startIcon={<HelpIcon />} onClick={active} />
        </ul>

        <h3 className={classes.End}>
           &copy;MusicOlogy 2020 | All Rights Reserved
        </h3>
      </section>
    </section>
  );
};

export default SideBar;
