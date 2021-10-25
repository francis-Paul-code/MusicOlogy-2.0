import classes from "./TopBar.module.css";
import { IconButton } from "@material-ui/core";

const TopBar = () => {
  return (
    <section className={classes.main}>
      <div>
        <form>
          <input type="text" id="searchBar" required/>
          <br/>
          <button type="Submit" className={classes.Button}>
            <svg width="4vh" height="4vh" viewBox="0 0 30 30" fill="white">
              <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default TopBar;
