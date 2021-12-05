/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import Playlists from "./Playlists";
import { data2 } from "../../pages/api/search";

const dataHolder: any = [];

const PlaylistResults = (props: any): any => {
  function handler(): any {
    for (let i = 0; i < data2.length; i++) {
      const values: any = data2[i].type;
      if (values === "playlist") {
        const playlist = {
          id: data2[i].id,
          title: data2[i].title,
          name: data2[i].nb_tracks,
          picture: data2[i].picture_big,
        };
        dataHolder.push(playlist);
      }
    }
  }
  handler();
  const U_playlists = [
    ...dataHolder
      .reduce(
        (map: { set: (arg0: any, arg1: any) => any }, obj: { id: any }) =>
          map.set(obj.id, obj),
        new Map()
      )
      .values(),
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        padding: " 0 3%",
        display: "inline-flex",
      }}
    >
      <Playlists item={U_playlists} />
    </div>
  );
};

export default PlaylistResults;
