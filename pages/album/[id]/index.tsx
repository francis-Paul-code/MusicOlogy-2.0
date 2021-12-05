import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout";
const Singlealbum = (props: any) => {
    const router = useRouter();
    const value = Object.keys(router.query)[0]
  console.log(value);
  return (
    <Layout>
          <div>{value}</div>
    </Layout>
  );
};

export default Singlealbum;
