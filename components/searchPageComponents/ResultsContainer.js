import { Grid, Tabs, Tab, AppBar, makeStyles } from "@material-ui/core";
import { Fragment, useState } from "react";
import classes from "./ResultsContainer.module.css";

const useStyle = makeStyles(() =>({
    tabs: {
      "& .MuiButtonBase-root.MuiTab-root": {
        position:"relative",
        minWidth:"8.2vw !important",
        fontWeight:"bold",
        fontSize:"  2.2vh"
      },
      "& .MuiTabsIndicator":{
        color:"#B93F2F",
        backgroundColor:"#B93F2F"
      }
    }
}))





const ResultsContainer = (props) => {
  const [value, setValue] = useState(0);
  const handler = (e, val) => {
    setValue(val);
  };
  const _classes = useStyle();


  return (
    <div className={classes.main}>
      <AppBar
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "transparent",
          borderBottom: "1px solid #504E4E",
          fontWeight: "bold",
        }}
      >
        <Tabs value={value} onChange={handler} className={_classes.tabs}>
          <Tab label="All" />
          <Tab label="Tracks" />
          <Tab label="Albums" />
          <Tab label="Artists" />
          <Tab label="Genres" />
          <Tab label="Playlists" />
        </Tabs>
      </AppBar>
      <Grid className={classes.container}>
        <TabPanel value={value} index={0}>
          {props.All}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {props.Tracks}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {props.Albums}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {props.Artits}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {props.Genres}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {props.Playlist}
        </TabPanel>
      </Grid>
    </div>
  );
};

export default ResultsContainer;

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      { value === index && (<h1>{children}</h1>) }
    </div>
  );
}

 


// return (
//     <div className={classes.main}>
//         <Grid className={classes.Links}>
//               <Nav/>
//         </Grid>
//         <Grid className={classes.container}>
//             {props.children}
//         </Grid>

//     </div>
// )
