/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/globals.css";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Progress } from "../LoadingBar";
import { useProgressStore } from "../LoadingBar/store";




/**
 * This Is the Main Page Component
 * @param {any}param0
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: any) {

  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  const router = useRouter();
  
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>MusicOlogy</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <meta name="description" content="This is a music Application"></meta>
      </Head>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
