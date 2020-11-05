import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #e1e1e1
  }

  body, button, text-area, input{
    font-family: Quicksand, sans-serif;
  }
  :root {
    --color-green: #06291D;
    --color-green-s: #347e5a;
    --color-yellow: #FFBA00;
    --color-yellow-s: #b19b6a;
    --color-white: #d1d1d1;
    --color-black: #0f0f0f;
  }

`;
