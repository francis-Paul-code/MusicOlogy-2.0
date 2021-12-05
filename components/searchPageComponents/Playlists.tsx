import PrimaryCard from "../Cards/primaryCard";

const Playlists = (props: { item: any[] }) => {
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
      {props.item.map(
        (item: { id: any; picture: any; name: any; title: any }) => (
          <PrimaryCard
            id={item.id}
            key={item.id}
            image={item.picture}
            artist={item.name}
            title={item.title}
          />
        )
      )}
    </ul>
  );
};

export default Playlists;
