import React, { Fragment } from "react";
import classes from "./All.module.css";
import ArtistResults from "./ArtistResults";
import TrackResults from "./TrackResults";
import AlbumsResults from "./AlbumsResults";
import PlaylistResults from "./PlaylistResults";
import Link from "next/link";

const AllResults = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.tracks}>
        <Fragment>
          <Link href="/mkl">
            <h3 className={classes.head}> Tracks </h3>
          </Link>
          <TrackResults />
        </Fragment>
      </div>
      <div className={classes.artists}>
        <Fragment>
          <Link href="/mkl">
            <h3 className={classes.head}> Artists </h3>
          </Link>
          <ArtistResults />
        </Fragment>
      </div>
      <div className={classes.albums}>
        <Fragment>
          <Link href="/mkl">
            <h3 className={classes.head}> Albums </h3>
          </Link>
          <AlbumsResults />
        </Fragment>
      </div>
      <div className={classes.playlists}>
        <Fragment>
        <Link href="/mkl">
            <h3 className={classes.head}> Playlists </h3>
          </Link>
          <PlaylistResults />
        </Fragment>
      </div>
    </div>
  );
};

export default AllResults;

// export async function getStaticProps() {
//    // filtering duplicate objects from dataHolder

//    const U_tracks = [
//     ...dataHolder.reduce(
//       (map, obj) => map.set(obj.id, obj),
//       new Map()
//     ).values(),
//   ];
//     return {
//       props: {
//         tracks: U_tracks,
//       },
//     };
//   }
