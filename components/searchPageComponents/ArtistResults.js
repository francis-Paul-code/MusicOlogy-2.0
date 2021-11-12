import ArtistsList from "./ArtistsList";
import { value } from "../ui/TopBar"
import LoadingPage from "../Layout/LoadingPage";
import { useEffect, useState } from "react";

let data = [];
const ArtistResults = (props) => {

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handler = () => {
      try {
        setLoading(true);
        fetch(
          `https://vast-beyond-47209.herokuapp.com/https://api.deezer.com/search/artist?q=${value}`,
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
            let all = [];
            results.map((item) => {
              let artist = {
                id: item.id,
                picture: item.picture_big,
                name: item.name,
              };
              all.push(artist);
            });
            const next = [
              ...all
                .reduce((map, obj) => map.set(obj.id, obj), new Map())
                .values(),
            ];
            data = next;
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    };handler();
  }, []);
  
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        padding: "0 3%",
      }}
    >
      {loading ? <LoadingPage /> : <ArtistsList item={data} />}
    </div>
  );
};

export default ArtistResults;
