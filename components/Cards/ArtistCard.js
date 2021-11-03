import classes from "./ArtistCard.module.css";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";

const ArtistCard = (props) => {
  return (
    <Link href={"/"}>
      <div className={classes.main}>
        
        <Hidden xsDown>
          <section className={classes._Desktop}>
            <div className={classes.image}>
              <img src={props.image} alt="" />
            </div>
            <div className={classes.artist}>
              <h3>{props.artist}</h3>
            </div>
          </section>
        </Hidden>
        <Hidden smUp >
          <section className={classes._Mobile}>
            <div className={classes.image}>
              <img src={props.image} alt="" />
            </div>
            <div className={classes.artist}>
              <h3>{props.artist}</h3>
            </div>
            
          </section>
        </Hidden>
       
      </div>
    </Link>
  );
};

export default ArtistCard;
