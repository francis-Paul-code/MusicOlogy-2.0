import classes from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  return (
    <div className={props.className}>
      <li className={classes.button}>
        <div className={classes.Holder} role="tab">
          <div className={classes.startIcon}>{props.startIcon}</div>
          <Link href={props.Route}>{props._Name}</Link>
        </div>
      </li>
    </div>
  );
};
export default Button;
