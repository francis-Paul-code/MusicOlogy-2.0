import TopBar, { name } from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import ResultsContainer from "../../components/searchPageComponents/ResultsContainer";

const SearchPage = (props) => {
  const data = "This is dummy text!!!";

  return (
    <div>
      <TopBar />
      <Carrier>
        <ResultsContainer
          All={data}
          Tracks={data}
          Albums={data}
          Artits={data}
          Genres={data}
          Playlist={data}
        />
      </Carrier>
    </div>
  );
};
export default SearchPage;
