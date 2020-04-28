import { createGlobalStyle } from 'styled-components';
import background from './img/background.jpg';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat center;
  background-size: cover;
  overflow-x: hidden;
}
`;

export default GlobalStyle;
