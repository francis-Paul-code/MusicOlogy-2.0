import React, { Fragment } from "react";
import classes from "./All.module.css";
import { data } from "./data";
import TrackList from "./TrackList";

export const dataHolder = [];

const AllResults = (props) => {
  function handler() {
    for (let i = 0; i < data.length; i++) {
      const values = data[i].type;
      if (values === "track") {

        var seconds = data[i].duration; // Some arbitrary value
        var date = new Date(1000 * seconds).toISOString().substr(11, 8).replace(/^[0:]+/, "") // multiply by 1000 because Date() requires miliseconds
         console.log(date)

        let track = {
          id: data[i].id,
          title: data[i].title_short,
          cover: data[i].album.cover,
          artist: data[i].artist.name,
          album: data[i].album.title,
          duration: date,
        };
        dataHolder.push(track);
      }
    }
  }

  handler();
  const U_tracks = [
    ...dataHolder
      .reduce((map, obj) => map.set(obj.id, obj), new Map())
      .values(),
  ];

  return (
    <div className={classes.main}>
      <div className={classes.tracks}>
        <Fragment>
          <TrackList item={U_tracks} />
          {console.log(U_tracks)}
        </Fragment>
      </div>
      <div className={classes.artists}></div>
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
