import Head from "next/head";
import {Fragment} from "react";
import TopBar from '../components/ui/TopBar'
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
      </section>
    </Fragment>
  );
};

export default Home;
