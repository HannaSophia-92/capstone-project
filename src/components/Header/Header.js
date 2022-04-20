import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo/journi-icon.svg';

export default function Header() {
  return (
    <header>
      <StyledNavLink to="/">
        <Heading>
          <StyledLogo />
        </Heading>
      </StyledNavLink>
    </header>
  );
}

const Heading = styled.h1`
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledLogo = styled(Logo)`
  width: 140px;
`;
