/* eslint-disable require-jsdoc */
import React, { Fragment } from "react";
import classes from "./All.module.css";
import ArtistResults from "./ArtistResults";
import TrackResults from "./TrackResults";
import PlaylistResults from "./PlaylistResults";
import Link from "next/link";
import { value } from "../ui/TopBar";
import AlbumsList from "./AlbumsList";

let data: any[] = [];
function AllResults(props: any): any {
  // const [loading, setLoading] = useState(false);

  fetch(
    `https://vast-beyond-47209.herokuapp.com/https://api.deezer.com/search/album?q=${value}`,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      const results = resData.data;
      const all: any[] = [];
      results.map((item: any) => {
        const album = {
          id: item.id,
          title: item.title,
          picture: item.cover_big,
          name: item.artist.name,
        };
        all.push(album);
      });
      const next = [
        ...all.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
      ];
      data = next;
    });

  // if (loading === true) {
  //   return LoadingPage;
  // }

  return (
    <div className={classes.main}>
      <div className={classes.tracks}>
        <Fragment>
          <Link href="#Tracks">
            <div className={classes.head}>
              <h3> Tracks </h3>
            </div>
          </Link>
          <TrackResults />
        </Fragment>
      </div>

      <div className={classes.artists}>
        <Fragment>
          <Link href="#Artists">
            <div className={classes.head}>
              <h3> Artists </h3>
            </div>
          </Link>
          <ArtistResults />
        </Fragment>
      </div>

      <div className={classes.albums}>
        <Fragment>
          <Link href="#albums">
            <div className={classes.head}>
              <h3> Albums </h3>
            </div>
          </Link>
          <div>
            <AlbumsList item={data} />
          </div>
        </Fragment>
      </div>

      <div className={classes.playlists}>
        <Fragment>
          <Link href="#playlists">
            <div className={classes.head}>
              <h3> Playlists </h3>
            </div>
          </Link>
          <PlaylistResults />
        </Fragment>
      </div>
    </div>
  );
}

export default AllResults;
