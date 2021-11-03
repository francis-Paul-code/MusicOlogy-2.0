import Head from "next/head";
import { Fragment } from "react";
import TopBar from "../components/ui/TopBar";
import Carrier from "../components/ui/mainCarrier";

const Landing = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>MusicOlogy</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="This Is the First Nextjs Version"
        ></meta>
      </Head> */}
      <section>
        <TopBar />
        <Carrier>
          <h1>Home</h1>
        </Carrier>
      </section>
    </Fragment>
  );
};

export default Landing;
