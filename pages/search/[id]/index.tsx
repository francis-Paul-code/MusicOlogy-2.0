/* eslint-disable require-jsdoc */
import TopBar from "../../../components/ui/TopBar";
import Carrier from "../../../components/ui/mainCarrier";
import ResultsContainer from "../../../components/searchPageComponents/ResultsContainer";
import AllResults from "../../../components/searchPageComponents/AllResults";
import TrackResults from "../../../components/searchPageComponents/TrackResults";
import ArtistResults from "../../../components/searchPageComponents/ArtistResults";
import AlbumsResults from "../../../components/searchPageComponents/AlbumsResults";
import PlaylistResults from "../../../components/searchPageComponents/PlaylistResults";
import { searchResults, playlists } from "../../api/search";
import Layout from "../../../components/Layout/Layout";
import { value } from '../../../components/ui/TopBar'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Search = ( props: any) => {
  const router = useRouter();
  searchResults();
  playlists();
  return (
    <Layout>
      <div>
        <TopBar />
        <Carrier>
          <ResultsContainer
            All={<AllResults />}
            Tracks={<TrackResults />}
            Albums={<AlbumsResults />}
            Artists={<ArtistResults />}
            Playlist={<PlaylistResults />}
          />
        </Carrier>
      </div>
    </Layout>
  );
};


export async function getStaticPaths() {

  return {
    paths: [{params: {id:"value"}}],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {

    },
  }
}
export default Search;
