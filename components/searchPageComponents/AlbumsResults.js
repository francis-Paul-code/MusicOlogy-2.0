import AlbumsList from "./AlbumsList";
import {data} from '../../pages/api/search';

const dataHolder = [];

const AlbumsResults = (props) => {

    function handler() {
        for (let i = 0; i < data.length; i++) {
          const values = data[i].album.type;
          if (values === "album") {
            let album = {
              id: data[i].album.id,
              title: data[i].album.title,
              picture: data[i].album.cover_big,
              name: data[i].artist.name,
              
            };
            dataHolder.push(album);
          }
        }
      }
      handler();
      const U_albums = [
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
        padding: "0 3%"

      }}
    >
      <AlbumsList item={U_albums} />
    </div>
    )
}

export default AlbumsResults
