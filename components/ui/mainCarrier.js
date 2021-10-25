import classes from "./mainCarrier.module.css";
import {Grid} from "@material-ui/core";

const Carrier = (props) => {
    return (
        <Grid className={classes.main}>
            {props.children}
        </Grid>
    )
}

export default Carrier;
