import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar {
    width: 8px;
    }
    }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Equivale a min-h-screen */
    background: linear-gradient(135deg, #f5f7b2 0%, #ffd1ec 100%); 
    background-attachment: fixed; /* Fija el fondo al hacer scroll */

  }
`;

export default GlobalStyles;