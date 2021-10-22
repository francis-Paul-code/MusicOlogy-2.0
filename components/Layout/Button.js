import classes from "./Button.module.css";
import Link from "next/link";

const Button = (props) => {
  function clicked(event){
    props.onClick(event);
  }
    return (
        <li className={classes.button}  onClick={clicked} >
        <div className={classes.Holder}>
          <div className={classes.startIcon}>
            {props.startIcon}
          </div>
          <Link href={props.Route} >{props._Name}</Link>
        </div>
      </li>
    )
}
export default Button
