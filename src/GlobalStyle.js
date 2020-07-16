import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: 1px dotted white;
}

::-webkit-search-cancel-button {
  display: none;
}

textarea,
input.text,
input[type="text"],
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}

body {
  background: linear-gradient(to left, #56ccf2, #2f80ed);
  overflow-x: hidden;
}
`;

export default GlobalStyle;
