import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-search-cancel-button {
  display: none;
}

::-webkit-textfield-decoration-container {
  margin-left: 3%;
}

body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #5433ff, #20bdff, #a5fecb);
  background-size: cover;
  overflow-x: hidden;
}
`;

export default GlobalStyle;
