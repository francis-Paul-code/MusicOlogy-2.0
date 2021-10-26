import classes from './flexCard.module.css';

const FlexCard = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.cover}>
                <img src={props.image} alt=""/>
            </div>
            <div className={classes.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={classes.artists}>
                <h3>{props.artist}</h3>
            </div>
            <div className={classes.album}>
                <h3>{props.album}</h3>
            </div>
            <div className={classes.length}>
                <h3>{props.length}</h3>
            </div>
        </div>
    )
}

export default FlexCard
