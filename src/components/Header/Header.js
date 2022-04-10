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
  color: var(--color-dark-gray);
  border-bottom: 1px solid var(--color-dark-gray);
  text-align: center;
  margin: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
