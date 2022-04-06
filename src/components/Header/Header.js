import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <StyledNavLink to="/">
        <Heading>Journi</Heading>
      </StyledNavLink>
    </header>
  );
}

const Heading = styled.h1`
  color: #2f2f2f;
  border-bottom: 1px solid #2f2f2f;
  text-align: center;
  margin: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
