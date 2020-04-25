// GlobalStyles.js

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const GlobalStyles = createGlobalStyle`
  ${reset};
  body {
    background-color: #121212;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.65;
  }
`;

export const palette = {
  white: '#fff',
  black: '#000',
  gray1: '#24272b',
  gray2: '#272c34',
};
