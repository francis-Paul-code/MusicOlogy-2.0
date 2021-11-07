import AlbumCard from "../Cards/AlbumCard"

const AlbumsList = (props) => {
    return (
        <ul
      style={{
        position: "relative",
        padding: "0",
        margin:"0",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      {props.item.map((item) => (
        <AlbumCard
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

export default AlbumsList
