import FlexCard from "../Cards/flexCard";
import classes from "./TrackList.module.css";

const TrackList = (props) => {
  return (
    <ul style={{ padding: "0" }}>
      <div className={classes.main}>
        <div className={classes.cover}>
        </div>
        <div className={classes.title}>
          <h3>Title</h3>
        </div>
        <div className={classes.artists}>
          <h3>Artist</h3>
        </div>
        <div className={classes.album}>
          <h3>Album</h3>
        </div>
        <div className={classes.length}>
          <h3>Duration</h3>
        </div>
      </div>
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
  );
};

export default TrackList;
