import { NavLink } from 'react-router-dom';
import ScreenReaderOnly from '../styledComponents/ScreenReaderOnly';
import { HiHome } from 'react-icons/hi';
import { FaCompass } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import { GoGlobe } from 'react-icons/go';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavLinkStyled to="/">
        <ScreenReaderOnly>Past Trips</ScreenReaderOnly>
        <HiHome size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/formPage">
        <ScreenReaderOnly>Create new Trip</ScreenReaderOnly>
        <IoIosCreate size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/futurePage">
        <ScreenReaderOnly>Future Trips</ScreenReaderOnly>
        <FaCompass size={33} />
      </NavLinkStyled>
      <NavLinkStyled to="/mapPage">
        <ScreenReaderOnly>Map</ScreenReaderOnly>
        <GoGlobe size={33} />
      </NavLinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: var(--color-dark-gray);
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: var(--color-white);

  &.active {
    color: var(--color-yellow);
  }
`;
