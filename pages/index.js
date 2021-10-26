import Head from "next/head";
import {Fragment} from "react";
import TopBar from '../components/ui/TopBar'
import Carrier from '../components/ui/mainCarrier';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>MusicOlogy</title>
        <meta
          name="description"
          content="This Is the First Nextjs Version"
        ></meta>
      </Head>
      <section>
        <TopBar/>
        <Carrier>
          <h1>Home</h1>
        </Carrier>
      </section>
    </Fragment>
  );
};

export default Home;
