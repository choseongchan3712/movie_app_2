import { PropagateLoader } from "react-spinners";
import styled from "styled-components";

const LoadingEl = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const Loading = (): JSX.Element => {
  return <LoadingEl>
    <PropagateLoader color="#fff"/>
  </LoadingEl>
};

export default Loading;