import styled from 'styled-components';
import { Router } from '@reach/router';

export const StyledApp = styled.div`
  @media only screen and (max-width: 768px) {
    grid-template-areas:
      'AppHeader'
      'AppNav'
      'AppMain'
      'AppFooter';
    grid-template-columns: auto;
  }

  text-align: center;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    '. AppHeader .'
    '. AppNav .'
    '. AppMain .'
    '. AppFooter .';
  background: #ddd;
`;

export const StyledRouter = styled(Router)`
  grid-area: AppMain;
  display: flex;
  flex-direction: column;
`;

export const StyledFooter = styled.footer`
  grid-area: AppFooter;
`;
