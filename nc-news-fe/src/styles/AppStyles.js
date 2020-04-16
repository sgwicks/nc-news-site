import styled from 'styled-components';
import { Router } from '@reach/router';

export const StyledRouter = styled(Router)`
  grid-area: AppMain;
  display: flex;
`;

export const StyledApp = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    '. AppHeader . '
    '. AppNav .'
    '. AppMain .'
    '. AppFooter .';
`;

export const StyledFooter = styled.footer`
  grid-area: AppFooter;
`;
