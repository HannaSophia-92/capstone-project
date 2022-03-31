import { NavLink } from 'react-router-dom';
import ScreenReaderOnly from './ScreenReaderOnly';
import { HiHome } from 'react-icons/hi';
import { FaCompass } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <NavLinkStyled to="/">
        <ScreenReaderOnly>Past Trips</ScreenReaderOnly>
        <HiHome size={35} />
      </NavLinkStyled>
      <NavLinkStyled to="/formPage">
        <ScreenReaderOnly>Create new Trip</ScreenReaderOnly>
        <IoIosCreate size={35} />
      </NavLinkStyled>
      <NavLinkStyled to="/futurePage">
        <ScreenReaderOnly>Future Trips</ScreenReaderOnly>
        <FaCompass size={35} />
      </NavLinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  background-color: steelblue;
  background-color: #2f2f2f;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #ffcb74;
`;
