import Head from "next/head";
import SimpleTube from "../src/SimpleTube";
import { useEffect, useState } from "react";
import web3 from "./../src/web3";
import Loading from "./../components/Loading";
import Header from "../components/Header";
import UploadVideo from "../components/UploadVideo";
import Video from "../components/Video";
import PlayedVideo from "../components/PlayedVideo";

export default function Home() {
  const [owner, setOwner] = useState("");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [playedVideo, setPlayedVideo] = useState();

  useEffect(() => {
    loadBlockchain();
  }, []);

  // Load All Blockchain Data
  const loadBlockchain = async () => {
    setLoading(true);
    // Load web3 to connect with metamask
    try {
      const users = await web3.eth.getAccounts();
      setUser(users[0]);
    } catch (e) {
      console.log(e);
      window.alert("Error occured while fatching Metamask", e.message);
      setLoading(false);
    }

    // Fetch name
    const name = await SimpleTube.methods.name().call();
    setName(name);

    // Fetch owner
    const owner = await SimpleTube.methods.owner().call();
    setOwner(owner);
    fetchVideos();
    setLoading(false);
  };

  // Fetching videos from blockchain
  const fetchVideos = async () => {
    const allVideos = [];
    const videoCount = await SimpleTube.methods.videoCount().call();
    for (let i = 0; i < videoCount; i++) {
      const video = await SimpleTube.methods.videos(i).call();
      allVideos.push(video);
    }
    setVideos(allVideos);
    setPlayedVideo(allVideos[0]);
  };

  return (
    <>
      <Head>
        <title>SimpleTube - Dapp</title>
        <meta
          name='description'
          content='SimpleTube Dapp created by alamgirakash2000'
        />
      </Head>

      <main className='home'>
        {loading && <Loading />}
        <Header user={user} name={name} />
        <div className='container'>
          <div className='row py-4'>
            <div className='col-md-8'>
              <div className='left'>
                <UploadVideo user={user} setLoading={setLoading} />
                <PlayedVideo playedVideo={playedVideo} />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='videos-container'>
                <div className='top'>
                  <h1>Available videos</h1>
                </div>
                <div className='videos'>
                  {videos.map((video) => (
                    <Video
                      key={video.id}
                      video={video}
                      playedVideo={playedVideo}
                      setPlayedVideo={setPlayedVideo}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
