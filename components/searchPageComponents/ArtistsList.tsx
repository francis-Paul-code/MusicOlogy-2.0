import ArtistCard from "../Cards/ArtistCard";
const ArtistsList = (props: { item: any[] }) => {
  return (
    <ul
      style={{
        position: "relative",
        padding: "0",
        margin: "0",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "flex-start",
      }}
    >
      {props.item.map((item: { id: any; picture: any; name: any }) => (
        <ArtistCard
          id={item.id}
          key={item.id}
          image={item.picture}
          artist={item.name}
        />
      ))}
    </ul>
  );
};

export default ArtistsList;
