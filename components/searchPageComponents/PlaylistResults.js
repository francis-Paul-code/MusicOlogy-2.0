import Playlists from './Playlists'
import{ data2 }from './data'

const dataHolder =[];

const PlaylistResults = (props) => {

    function handler() {
        for (let i = 0; i < data2.length; i++) {
          const values = data2[i].type;
          if (values === "playlist") {
            let playlist = {
              id: data2[i].id,
              title: data2[i].title,
              name: data2[i].nb_tracks,
              picture: data2[i].picture,
            };
            dataHolder.push(playlist);
          }
        }
      }
      handler();
      const U_playlists = [
        ...dataHolder
          .reduce((map, obj) => map.set(obj.id, obj), new Map())
          .values(),
      ];

    return (
        <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          padding:" 0 3%",
          display: "inline-flex",
        }}
      >
        <Playlists item={U_playlists} />
      </div>
    )
}

export default PlaylistResults
