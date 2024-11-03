import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import Loading from "../../components/Loading";
import styled from "styled-components";
import Banner from "./components/Banner";

const Home = (): JSX.Element => {
  const [nowData, setNowData] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: now } = await nowPlaying();

        setNowData(now);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(nowData);
  return <div>{isLoading ? <Loading /> : <>{nowData && <Banner movieData= {nowData} />}</>}</div>;
};

export default Home;
