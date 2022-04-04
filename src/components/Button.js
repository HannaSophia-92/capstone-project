import styled, { css } from 'styled-components';

export default styled.button`
  font-family: 'Lexend Peta', sans-serif;
  text-decoration: none;
  color: black;
  background-color: #f6f6f6;
  color: #2f2f2f;
  border: none;
  border-radius: 16px;
  padding: 4px 12px;
  margin: 5px 0;
  width: 150px;

  ${props =>
    props.variant === 'add' &&
    css`
      background-color: #2f2f2f;
      color: #f6f6f6;
    `}
`;
