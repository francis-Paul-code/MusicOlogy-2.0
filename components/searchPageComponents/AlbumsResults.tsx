import AlbumsList from "./AlbumsList";
import { value } from "../ui/TopBar";
import { useEffect, useState } from "react";
import LoadingPage from "../Layout/LoadingPage";

let data: any[] = [];
const AlbumsResults = (props: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = () => {
      try {
        setLoading(true);
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
    };
    handler();
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
      {loading ? <LoadingPage /> : <AlbumsList item={data} />}
    </div>
  );
};

export default AlbumsResults;
