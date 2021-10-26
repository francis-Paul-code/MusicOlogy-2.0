import classes from "./ArtistCard.module.css";
import Link from "next/link";

const ArtistCard = (props) => {
  return (
    <Link href={"/"}>
      <div className={classes.main}>
        <div className={classes.image}>
          <img src={props._image} alt="" />
        </div>
        <div className={classes.artist}>
          <h3>{props._artist}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ArtistCard;
