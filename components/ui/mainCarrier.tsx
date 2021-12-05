import classes from "./mainCarrier.module.css";

const Carrier = (props: any) => {
  return <div className={classes.main}>{props.children}</div>;
};

export default Carrier;
