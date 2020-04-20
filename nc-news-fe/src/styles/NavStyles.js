import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledNav = styled.nav`
  grid-area: AppNav;
  display: flex;
  color: black;
  a:hover {
    background: #444;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 0;
  background: #${({ i }) => (i % 2 ? '555' : '666')};
  color: #${({ i }) => (i % 2 ? '99f' : '9f9')};
  text-decoration: none;
  flex-basis: auto;
  flex-grow: 1;
  font-weight: 700;
`;
