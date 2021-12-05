import TopBar from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import Layout from "../../components/Layout/Layout";

const AlbumsPage = () => {
  return (
    <Layout>
      <div>
        <TopBar />
        <Carrier>
          <h1>Library</h1>
        </Carrier>
      </div>
    </Layout>
  );
};

export default AlbumsPage;
