import ArtistCard from "../Cards/ArtistCard";
const ArtistsList = (props) => {
  return (
    <ul
      style={{
        position: "relative",
        padding: "0",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "flex-start"
      }}
    >
      {props.item.map((item) => (
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
