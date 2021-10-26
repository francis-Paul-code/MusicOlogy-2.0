import classes from "./AlbumCard.module.css";

const AlbumCard = (props) => {
  return (
    <div className={classes.main}>
      <img src={props._image} alt="" />
      <div className={classes.overlay}>
        <div>
          <h3>{props._title}</h3>
          <h2>{props._artist}</h2>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
