import styled, { css } from 'styled-components';

export default styled.button`
  font-family: 'Lexend Peta', sans-serif;
  text-decoration: none;
  color: black;
  background-color: var(--color-white);
  color: var(--color-dark-gray);
  border: none;
  border-radius: 16px;
  padding: 4px 12px;
  margin: 5px 0;
  width: 150px;

  ${props =>
    props.variant === 'add' &&
    css`
      background-color: var(--color-dark-gray);
      color: var(--color-white);
    `}

  ${props =>
    props.variant === 'submit' &&
    css`
      background-color: seagreen;
      color: var(--color-white);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'danger' &&
    css`
      background-color: crimson;
      color: var(--color-white);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'notes' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'edit' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'submitEdit' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);
    `}

    ${props =>
    props.variant === 'delete' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'done' &&
    css`
      background: transparent;
      border: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-yellow);
      }
    `}

    ${props =>
    props.variant === 'save' &&
    css`
      background-color: var(--color-yellow);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}

    ${props =>
    props.variant === 'keep' &&
    css`
      background-color: var(--color-white);
      color: var(--color-dark-gray);
      text-transform: uppercase;
    `}
`;
