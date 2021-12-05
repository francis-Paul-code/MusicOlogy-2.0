import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Carrier from "../components/ui/mainCarrier";

const Landing = () => {
  return (
    <Layout>
      <Fragment>
        <section
          style={{ position: "absolute", height: "100vh", width: "100vw" }}
        >
          <Carrier>
            <h1>Landing</h1>
          </Carrier>
        </section>
      </Fragment>
    </Layout>
  );
};

export default Landing;
