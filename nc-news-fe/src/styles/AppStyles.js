import styled from 'styled-components';
import { Router } from '@reach/router';

export const StyledRouter = styled(Router)`
  grid-area: AppMain;
  display: flex;
`;

export const StyledApp = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'AppHeader AppHeader AppHeader '
    'AppNav AppNav AppNav'
    '. AppMain .'
    'AppFooter AppFooter AppFooter';
`;

export const StyledHeader = styled.header`
  border: 3px solid red;
  grid-area: AppHeader;
`;

export const StyledNav = styled.nav`
  border: 3px solid blue;
  grid-area: AppNav;
`;

export const StyledFooter = styled.footer`
  border: 3px solid yellow;
  grid-area: AppFooter;
`;
