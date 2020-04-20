import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledHeader = styled.header`
  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }

  background: #bbbbbb;
  padding: 10px 0;
  grid-area: AppHeader;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
`;

export const H1 = styled.h1`
  display: inline;
`;

export const User = styled.p`
  @media only screen and (max-width: 750px) {
    position: relative;
    align-self: center;
  }

  margin: 0 5px 0 0;
  padding: 0;
  position: absolute;
  align-self: flex-end;
`;

export const OrbImg = styled.img`
  width: 10px;
  height: 10px;
`;
