import PrimaryCard from "../Cards/primaryCard"

const Playlists = (props) => {
    return (
        <ul
        style={{
          position: "relative",
          padding: "0",
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {props.item.map((item) => (
          <PrimaryCard
            id={item.id}
            key={item.id}
            image={item.picture}
            artist={item.name}
            title={item.title}
            
          />
        ))}
      </ul>
    )
}

export default Playlists;
