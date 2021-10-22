import classes from "./TopBar.module.css";
import { IconButton } from "@material-ui/core";

const TopBar = () => {
  return (
    <section className={classes.main}>
      <input type="text" />
      <button type="submit" className={classes.Button}>
        <svg
          width="4vh"
          height="2vh"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
        </svg>
      </button>
    </section>
  );
};

export default TopBar;
