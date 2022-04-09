import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --color-dark-gray:#2f2f2f;
  --color-white:#f6f6f6;
  --color-yellow:#ffcb74;
}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;

  }

  h2 {
    font-size: 18px;
    color: var(--color-dark-gray);
  }

  input {
  border: none;
  border-bottom: 1px solid var(--color-dark-gray);
  &:focus {
outline: none;
  }
}
`;
