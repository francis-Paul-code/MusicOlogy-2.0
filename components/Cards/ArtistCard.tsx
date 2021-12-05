import classes from "./ArtistCard.module.css";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";

const ArtistCard = (props: any) => {
  return (
    <Link href={"/"}>
      <>
        <Hidden xsDown>
          <div className={classes.main} style={props.styles}>
            <section className={classes._Desktop}>
              <div className={classes.image}>
                <img src={props.image} alt="" />
              </div>
              <div className={classes.artist}>
                <h3>{props.artist}</h3>
              </div>
            </section>
          </div>
        </Hidden>
        <Hidden smUp>
          <div className={classes.main} style={props.styles2}>
            <section className={classes._Mobile}>
              <div className={classes.image}>
                <img src={props.image} alt="" />
              </div>
              <div className={classes.artist}>
                <h3>{props.artist}</h3>
              </div>
            </section>
          </div>{" "}
        </Hidden>
      </>
    </Link>
  );
};

export default ArtistCard;
