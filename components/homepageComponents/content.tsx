/* eslint-disable require-jsdoc */
/* eslint-disable prefer-const */
import React, { Fragment } from "react";
import ArtistCard from "../Cards/ArtistCard";
import PrimaryCard from "../Cards/primaryCard";
import Cardslider from "./cardSlide";
import classes from "./content.module.css";

const Content = (props: { albums: any; artists: any; playlists: any; }) => {
  return (
    <section className={classes.main}>
      <div className={classes.carrier}>
        <div className={classes.section}>
          <Cardslider label="New Releases" data={props.albums} />
        </div>
        <div className={classes.section}>
          <Fragment>
            <h2 className={classes.label}>Trending Artists</h2>
            <ul
              style={{
                position: "relative",
                width: "98%",
                right: "1%",
                height: "100%",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {props.artists.map((item:any) => {
                return (
                  <ArtistCard
                    {...item}
                    key={item.id}
                    styles={{
                      width: "17vw",
                      height: "22vmax",
                      margin: "2% 0 0 3%",
                    }}
                  />
                );
              })}
            </ul>
          </Fragment>
        </div>

        <div className={classes.section}>
          <Fragment>
            <h2 className={classes.label}>Playlists For Every Mood</h2>
            <ul
              style={{
                position: "relative",
                width: "98%",
                right: "1%",
                height: "100%",
                overflow: "hidden",
                padding: "0",
                margin: "0",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {props.playlists.map((item:any ) => {
                return (
                  <PrimaryCard
                    {...item}
                    key={item.id}
                    styles={{
                      width: "17vw",
                      height: "23vmax",
                      margin: "2% 0 0 3%",
                    }}
                  />
                );
              })}
            </ul>
          </Fragment>
        </div>
      </div>
    </section>
  );
};

export default Content;


