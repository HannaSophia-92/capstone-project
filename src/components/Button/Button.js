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

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: seagreen;
      color: #f6f6f6;
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'danger' &&
    css`
      background-color: crimson;
      color: #f6f6f6;
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'notes' &&
    css`
      background: transparent;
      border: none;
      color: #f6f6f6;
      position: absolute;
      bottom: 0;
      right: 95px;
    `}

    ${props =>
    props.variant === 'edit' &&
    css`
      background: transparent;
      border: none;
      color: #f6f6f6;
      position: absolute;
      bottom: 0px;
      right: 90px;

      &:hover {
        color: #ffcb74;
      }
    `}

    ${props =>
    props.variant === 'submitEdit' &&
    css`
      background: transparent;
      border: none;
      color: #f6f6f6;
    `}

    ${props =>
    props.variant === 'delete' &&
    css`
      background: transparent;
      border: none;
      color: #f6f6f6;
      position: absolute;
      color: #f6f6f6;
      bottom: 0px;
      left: -25px;

      &:hover {
        color: #ffcb74;
      }
    `}

    ${props =>
    props.variant === 'done' &&
    css`
      background: transparent;
      border: none;
      color: #f6f6f6;
      position: absolute;
      bottom: 0px;
      right: -25px;

      &:hover {
        color: #ffcb74;
      }
    `}

    ${props =>
    props.variant === 'save' &&
    css`
      background-color: #ffcb74;
      color: #2f2f2f;
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'keep' &&
    css`
      background-color: #f6f6f6;
      color: #2f2f2f;
      text-transform: uppercase;
    `}
`;
