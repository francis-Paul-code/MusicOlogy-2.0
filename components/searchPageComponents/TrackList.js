import FlexCard from "../Cards/flexCard"

const TrackList = (props) => {
    return (
       <ul style={{padding:"0"}}>
         {props.item.map((item) => (
             <FlexCard
              id={item.id}
              key={item.id}
              image={item.cover}
              title={item.title}
              artist={item.artist}
              album={item.album}
              length={item.duration}
             />
         ))}
       </ul>
    )
}

export default TrackList
