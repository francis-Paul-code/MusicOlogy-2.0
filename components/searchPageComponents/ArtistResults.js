import ArtistsList from "./ArtistsList";
import { data } from "./data";

const dataHolder = [];

const ArtistResults = (props) => {
  function handler() {
    for (let i = 0; i < data.length; i++) {
      const values = data[i].artist.type;
      if (values === "artist") {
        let artist = {
          id: data[i].artist.id,
          name: data[i].artist.name,
          picture: data[i].artist.picture,
        };
        dataHolder.push(artist);
      }
    }
  }
  handler();
  const U_artists = [
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
        padding: "2vh",
        display: "inline-flex",
      }}
    >
      <ArtistsList item={U_artists} />
    </div>
  );
};

export default ArtistResults;
