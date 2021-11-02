import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
       <Head>
        <title>MusicOlogy</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="This is a music Application"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
