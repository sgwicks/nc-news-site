import styled from 'styled-components';
import { Router } from '@reach/router';

export const StyledRouter = styled(Router)`
  grid-area: AppMain;
  display: flex;
`;

export const StyledMain = styled.main`
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const StyledH2 = styled.h2`
  border: solid green 2px;
`;
