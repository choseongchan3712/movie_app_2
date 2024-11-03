import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface CommonPadding {
  pcPadding: string;
};

export const commonPadding: CommonPadding = {
  pcPadding: "0 3%",
};

export const GlobalStyled = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -1px;
  background-color: #000;
  color: #fff;
  }

  img {
    width: 100%;
    display: block;
  }

  a {
    display: block;
    text-decoration: none;
    color: white;
  }
`;
