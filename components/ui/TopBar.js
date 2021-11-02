import classes from "./TopBar.module.css";
import { IconButton } from "@material-ui/core";
import { useRef } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/SearchRounded";
import ArrowRight from '@material-ui/icons/ArrowForward'
import theme from "../Layout/theme"

export var name;

const TopBar = (props) => {
  const searchText = useRef(props.searchText);
  const router = useRouter();
  function searchSubmit(event) {
    event.preventDefault();
    const enteredtext = searchText.current.value;
    const search_Data = enteredtext;
    router.push("/Search:" + enteredtext);
    name = search_Data;
  }

  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <form onSubmit={searchSubmit}>
          <div className={classes.searchBar}>
            <div>
              <SearchIcon style={{color:theme.palette.secondary.main}}/>
            </div>
            <input
              type="text"
              id="searchBar"
              required
              placeholder="Songs,Artists,Albums"
              ref={searchText}
            />
            <button type="Submit" className={classes.Button}>
              <ArrowRight style={{color:"white"}}/>
            </button>
          </div>

          <br />
        </form>
      </div>
    </section>
  );
};

export default TopBar;
