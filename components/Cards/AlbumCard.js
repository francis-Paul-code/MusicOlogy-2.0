import classes from "./AlbumCard.module.css";
import Hidden from "@material-ui/core/Hidden";
import { Divider, Grid } from "@material-ui/core";

const AlbumCard = (props) => {
  return (
    <div className={classes.main}>
      <Hidden smDown>
        <section className={classes._Desktop}>
          <img src={props.image} alt="" />
          <div className={classes.overlay}>
            <div className={classes.textContent}>
              <div className={classes.albumName}>
                <h3>{props.title}</h3>
              </div>
              <Divider style={{ backgroundColor: "white", margin: "0 3%" }} />
              <div className={classes.artistName}>
                <h2>{props.artist}</h2>
              </div>
            </div>
          </div>
        </section>
      </Hidden>
      <Hidden mdUp>
        <Grid className={classes._Mobile}>
          <img src={props.image} alt="" />
          <div className={classes.overlay}>
            <div className={classes.textContent}>
              <div className={classes.albumName}>
                <h3>{props.title}</h3>
              </div>
              <Divider style={{ backgroundColor: "white", margin: "0 3%" }} />
              <div className={classes.artistName}>
                <h2>{props.artist}</h2>
              </div>
            </div>
          </div>
        </Grid>
      </Hidden>
    </div>
  );
};

export default AlbumCard;
