import AlbumCard from "../Cards/AlbumCard";
import React from "react";

const AlbumsList = (props: any) => {
  return (
    <ul
      style={{
        position: "relative",
        padding: "0",
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {props.item.map((item: any) => (
        <AlbumCard
          id={item.id}
          key={item.id}
          image={item.picture}
          artist={item.name}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default AlbumsList;
