import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'Source Sans Pro', sans-serif;
    letter-spacing: 0.01071em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  @media only screen and (min-width: 768px) {
    body {
      margin: 0;
      /* Change padding bottom to be footer height */
      padding-bottom: 200px;
      font-family: 'Roboto', 'Source Sans Pro', sans-serif;
      overflow-x: hidden;
      min-height: 100vh;
    }
  }
  
  @media only screen and (max-width: 767px) {
    body {
      margin: 0;
      /* Change padding bottom to be footer height */
      padding-bottom: 50px;
      font-family: 'Roboto', 'Source Sans Pro', sans-serif;
      overflow-x: hidden;
    }
  }
  `;

export default GlobalStyle;
