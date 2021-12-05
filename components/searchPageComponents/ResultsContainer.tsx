/* eslint-disable require-jsdoc */
import { Grid, Tabs, Tab, AppBar } from "@material-ui/core";
import { Fragment, useState } from "react";
import classes from "./ResultsContainer.module.css";

const ResultsContainer = (props: any) => {
  const [value, setValue] = useState(0);
  const handler = (e: any, val: any) => {
    setValue(val);
  };

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
        <Tabs
          value={value}
          onChange={handler}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All" />
          <Tab label="Tracks" />
          <Tab label="Albums" />
          <Tab label="Artists" />
          <Tab label="Playlists" />
        </Tabs>
      </AppBar>
      <Grid className={classes.container}>
        {}
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
          {props.Artists}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {props.Playlist}
        </TabPanel>
      </Grid>
    </div>
  );
};

export default ResultsContainer;

function TabPanel(props: any) {
  const { children, value, index } = props;
  return (
    <div className={classes.holder}>
      {value === index && <Fragment>{children}</Fragment>}
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
