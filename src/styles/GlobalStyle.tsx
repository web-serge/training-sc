import {createGlobalStyle} from "styled-components";
import {myTheme} from "./MyTheme";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: rgba(171,179,186, 10%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    line-height: 20px;
  }

  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    padding: 20px 0;
  }

  img {
    display: block;
    width: 100%;
  }
`