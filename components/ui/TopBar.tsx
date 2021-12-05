/* eslint-disable require-jsdoc */
import classes from "./TopBar.module.css";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/SearchRounded";
import ArrowRight from "@material-ui/icons/ArrowForward";
import theme from "../../theme";

export let value: string;

const TopBar = (props: any) => {
  const searchText = useRef(props.searchText);
  const router = useRouter();

  function searchSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    const enteredtext = searchText.current.value;
    router.push({
      pathname: "/search/q=",
      query: { name: enteredtext.toString() },
    });
    value = enteredtext
  }

  return (
    <section className={classes.main}>
      <div className={classes.container}>
        <form onSubmit={searchSubmit}>
          <div className={classes.searchBar}>
            <div>
              <SearchIcon style={{ color: theme.palette.secondary.main }} />
            </div>
            <input
              type="text"
              id="searchBar"
              required
              placeholder="Songs,Artists,Albums"
              ref={searchText}
            />
            <button type="submit" className={classes.Button}>
              <ArrowRight style={{ color: "white" }} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TopBar;
