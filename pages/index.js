import Head from "next/head";
import { Fragment } from "react";
import TopBar from "../components/ui/TopBar";
import Carrier from "../components/ui/mainCarrier";

const Landing = () => {
  return (
    <Fragment>
      <section style={{position:"absolute", height:"100vh", width:"100vw"}}>
        <Carrier>
          <h1>Landing</h1>
        </Carrier>
      </section>
    </Fragment>
  );
};

export default Landing;
