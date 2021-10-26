import TopBar, { name } from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import ResultsContainer from "../../components/searchPageComponents/ResultsContainer";
import PrimaryCard from "../../components/Cards/primaryCard";
import AlbumCard from "../../components/Cards/AlbumCard";
import AllResults from "../../components/searchPageComponents/AllResults";
import TrackResults from "../../components/searchPageComponents/TrackResults";

const SearchPage = (props) => {
  const data = "This is dummy text!!!";

  return (
    <div>
      <TopBar />
      <Carrier>
        <ResultsContainer
          All={<AllResults />}
          Tracks={<TrackResults/>}
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
