import React, { Fragment } from "react";
import classes from "./All.module.css";
import ArtistResults from "./ArtistResults";
import TrackResults from "./TrackResults";
import AlbumsResults from "./AlbumsResults";

const AllResults = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.tracks}>
        <Fragment>
          <TrackResults/>
        </Fragment>
      </div>
      <div className={classes.artists}>
        <Fragment>
          <ArtistResults/>
        </Fragment>
      </div>
      <div className={classes.albums}>
        <Fragment>
          <AlbumsResults/>
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
