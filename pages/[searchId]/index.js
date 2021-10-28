import TopBar, { name } from "../../components/ui/TopBar";
import Carrier from "../../components/ui/mainCarrier";
import ResultsContainer from "../../components/searchPageComponents/ResultsContainer";
import AllResults from "../../components/searchPageComponents/AllResults";
import TrackResults from "../../components/searchPageComponents/TrackResults";
import ArtistResults from "../../components/searchPageComponents/ArtistResults";
import AlbumsResults from "../../components/searchPageComponents/AlbumsResults";
import PlaylistResults from "../../components/searchPageComponents/PlaylistResults";


const SearchPage = (props) => {
  return (
    <div>
      <TopBar />
      <Carrier>
        <ResultsContainer
          All={<AllResults />}
          Tracks={<TrackResults/>}
          Albums={<AlbumsResults/>}
          Artits={<ArtistResults/>}
          Playlist={<PlaylistResults/>}
        />
        
      </Carrier>
    </div>
  );
};
export default SearchPage;
