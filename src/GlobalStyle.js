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

textarea,
input.text,
input[type="text"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}

body {
  background: linear-gradient(to right, #56ccf2, #2f80ed);
  overflow-x: hidden;
}
`;

export default GlobalStyle;
