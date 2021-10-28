import TopBar, { name } from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import ResultsContainer from "../../components/searchPageComponents/ResultsContainer";
import PrimaryCard from "../../components/Cards/primaryCard";
import AlbumCard from "../../components/Cards/AlbumCard";
import AllResults from "../../components/searchPageComponents/AllResults";
import TrackResults from "../../components/searchPageComponents/TrackResults";
import ArtistResults from "../../components/searchPageComponents/ArtistResults";
import AlbumsResults from "../../components/searchPageComponents/AlbumsResults";

const SearchPage = (props) => {
  const data = "This is dummy text!!!";

  return (
    <div>
      <TopBar />
      <Carrier>
        <ResultsContainer
          All={<AllResults />}
          Tracks={<TrackResults/>}
          Albums={<AlbumsResults/>}
          Artits={<ArtistResults/>}
          Genres={data}
          Playlist={data}
        />
        
      </Carrier>
    </div>
  );
};
export default SearchPage;
