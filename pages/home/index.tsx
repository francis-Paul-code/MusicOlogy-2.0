/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import TopBar from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import Content from "../../components/homepageComponents/content";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import theme from "../../theme";
import {Link }from '@material-ui/core';
import next from "next";

const Home = (props: any) => {
  if (props.failed)
    return (
      <Layout>
        <div style={{position: 'relative', width: 'fit-content',height:"fit-content", top:"40vh",margin:"auto",textAlign:"center"}}>
          <h2
            style={{
              position: "relative",
              width: "fit-content",
              height:"fit-content",
              fontSize: "1em",
              fontFamily: theme.typography.fontFamily,
              color: theme.palette.secondary.main,
            }}
          >
            {props.failed.message}
          </h2>
          <span ><Link href="/home" style={{ color: "white", fontFamily: theme.typography.fontFamily, textDecoration: "underline", fontSize: theme.typography.fontSize }}>Reload</Link></span>
        </div>
      </Layout>
    );
  return (
    <Layout>
      <div>
        <TopBar />
        <Carrier>
          <Content
            albums={props.success.albums}
            artists={props.success.artists}
            playlists={props.success.playlists}
          />
        </Carrier>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  let albums: any = [];
  let artists: any = [];
  let playlists: any = [];
  let message: string;
  let success: boolean;

  const baseUrl =
    "https://vast-beyond-47209.herokuapp.com/https://api.deezer.com/chart/0/";
  try {
    success = true;
    const param = ["albums", "artists", "playlists"];
    for (const [index, item] of param.entries()) {
      const res = await axios.get(baseUrl + item, {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
      if (index === 0) {
        for (const item of res.data.data) {
          const album = {
            id: item.id,
            image: item.cover_big,
            title: item.title,
            artist: item.artist.name,
          };
          if (albums.includes(album) === false) {
           await albums.push(album);
          }
        }
      }
      if (index === 1) {
        for (const item of res.data.data) {
          const artist = {
            id: item.id,
            image: item.picture_big,
            artist: item.name,
          };
          if (artists.includes(artist) === false) {
            await artists.push(artist);
          }
        }
      }
      if (index === 2) {
        for (const item of res.data.data) {
          const playlist = {
            id: item.id,
            image: item.picture_big,
            title: item.title,
            artist: item.nb_tracks,
          };
          if (playlists.includes(playlist) === false) {
            await playlists.push(playlist);
          }
        }
      }
    }
    
  } catch (error) {
    success = false;
    console.log(error);
    message = "Sorry, Looks like Your Offline. Please Check your Internet Connection";
  }

  albums.length = 8;
  artists.length = 6;
  playlists.length = 6;

  return {
    props: {
      success: success === true && {
        albums: albums,
        playlists: playlists,
        artists: artists,
      },
      failed: success === false && {
        message: message!,
      },
    },
  };
}
export default Home;
