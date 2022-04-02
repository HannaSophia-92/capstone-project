import { ReactComponent as JourniLogo } from '../images/logo.svg';
import ScreenReaderOnly from './ScreenReaderOnly';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">
        <h1>
          <ScreenReaderOnly>Journi</ScreenReaderOnly>
        </h1>
        <JourniLogo />
      </NavLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.h1`
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: #2f2f2f;
  width: 100%;
`;
