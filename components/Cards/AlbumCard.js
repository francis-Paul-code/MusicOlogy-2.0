import classes from "./AlbumCard.module.css";

const AlbumCard = (props) => {
  return (
    <div className={classes.main}>
      <img src={props.image} alt="" />
      <div className={classes.overlay}>
        <div>
          <h3>{props.title}</h3>
          <h2>{props.artist}</h2>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
