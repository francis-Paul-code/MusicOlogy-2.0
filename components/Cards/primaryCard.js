import classes from "./primaryCard.module.css";
import { Grid, Typography } from "@material-ui/core";
import Link from "next/link";

const PrimaryCard = (props, {styles}) => {
  return (
    <Link href={"/"}>
      <div className={classes.main} style={{...styles}}>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <Grid className={classes._footer}>
          <h2 className={classes._text}>{props.title}</h2>
          <h2 className={classes._text2}>{props.artist} Tracks</h2>
        </Grid>
      </div>
    </Link>
  );
};

export default PrimaryCard;
