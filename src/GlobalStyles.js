import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 112.5%;

  }

  h2 {
    font-size: 18px;
    color: #2f2f2f;
  }

  input {
  border: none;
  border-bottom: 1px solid #2f2f2f;
}
`;
