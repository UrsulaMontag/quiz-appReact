import { createGlobalStyle } from "styled-components";
import backgroundSVG from "../img/ContourLineRo.svg";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: none;
    opacity: 1;
    box-sizing: border-box;
    box-shadow: none;
  }
  
  html {
    font-size: 62.5%;
  }
  
  :root {
    --main-bg-color: #21445b;
    --main-text-color: #e5f2c9;
    --text-color-dark: #0e2a47;
    --items-bg-color: #1a656699;
    --header-footer-color: #1a6566;
    --items-text-color: white;
    --outline-dark: #4d8c4a;
    --outline-shadow: #00000060;
    --button-bg-color-1: #323050;
    --button-bg-color-2: #45214a;
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      
    min-height: 100vh;
    max-width: 100vw;
  
    font-size: 2.2rem;
    font-family: Roboto, sans-serif;
    letter-spacing: 0.2rem;
    font-weight: 400;
      
    color: var(--main-text-color);
    background: url(${backgroundSVG}) no-repeat;
    background-size: cover;
  }
  
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  
    padding: 15vh 0;
    min-height: calc(100vh - 18);
    max-width: 80vw;
  }

`;
