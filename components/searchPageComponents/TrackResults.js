import { Fragment } from 'react';
import TrackList from './TrackList';
import classes from './TrackResults.module.css';
import { data } from "./data";

const dataHolder = [];

const TrackResults = () => {

    function handler() {
        for (let i = 0; i < data.length; i++) {
          const values = data[i].type;
          if (values === "track") {
    
            var seconds = data[i].duration; // Some arbitrary value
            var date = new Date(1000 * seconds).toISOString().substr(11, 8).replace(/^[0:]+/, "") // multiply by 1000 because Date() requires miliseconds
            let track = {
              id: data[i].id,
              title: data[i].title_short,
              cover: data[i].album.cover,
              artist: data[i].artist.name,
              album: data[i].album.title,
              duration: date,
            };
            dataHolder.push(track);
          }
        }
      }
    
      handler();
      const U_tracks = [
        ...dataHolder
          .reduce((map, obj) => map.set(obj.id, obj), new Map())
          .values(),
      ];


    return (
       <div className={classes.main}> 
           <Fragment>
               <TrackList
                item={U_tracks}
               />

           </Fragment>
       </div>
    )
}

export default TrackResults
