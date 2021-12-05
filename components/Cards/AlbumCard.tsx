/* eslint-disable @next/next/link-passhref */
/* eslint-disable require-jsdoc */
import classes from "./AlbumCard.module.css";
import Hidden from "@material-ui/core/Hidden";
import { Divider, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Link from "next/link";

const AlbumCard = (props: any) => {
  const routeRef = useRef<HTMLDivElement>(null);
  // const router = useRouter();
  // useEffect(() => {
  //   function redirect(id: number, name: string): any {
  //     router.push({
  //       pathname: "/album/?",
  //       query: { id: id.toString(), name: name },
  //     })
  //   }
  //   if (typeof window !== "undefined") {
  //     routeRef.current?.onclick = redirect(props.id, props.title)?
  //   }

  // },[router])

  return (
    <>
      <Hidden smDown>
        <Link
          href={{
            pathname: "/album/id=",
            query: props.id.toString(),
          }}
        >
          <div
            className={classes.main}
            style={props.styles}
            ref={routeRef}
            id={props.id}
          >
            <section className={classes._Desktop}>
              <img src={props.image} alt="" />
              <div className={classes.overlay}>
                <div className={classes.textContent}>
                  <div className={classes.albumName}>
                    <h3>{props.title}</h3>
                  </div>
                  <Divider
                    style={{ backgroundColor: "white", margin: "0 3%" }}
                  />
                  <div className={classes.artistName}>
                    <h2>{props.artist}</h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Link>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.main} style={props.styles2}>
          <Grid className={classes._Mobile}>
            <img src={props.image} alt="" />
            <div className={classes.overlay}>
              <div className={classes.textContent}>
                <div className={classes.albumName}>
                  <h3>{props.title}</h3>
                </div>
                <Divider style={{ backgroundColor: "white", margin: "0 3%" }} />
                <div className={classes.artistName}>
                  <h2>{props.artist}</h2>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Hidden>
    </>
  );
};

export default AlbumCard;
