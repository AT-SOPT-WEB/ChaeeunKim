import { css } from "@emotion/react";
import { reset } from "./reset.css";

const GlobalStyle = css`
  ${reset}

  html, body {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
