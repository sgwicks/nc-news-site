import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledNav = styled.nav`
  grid-area: AppNav;
  display: flex;
`;

export const NavLink = styled(Link)`
  padding: 10px 0;
  background: #${({ i }) => (i % 2 ? 'ddd' : 'ccc')};
  flex-basis: auto;
  flex-grow: 1;
`;
