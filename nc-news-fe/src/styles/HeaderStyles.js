import styled from 'styled-components';
import { Link } from '@reach/router';

export const StyledHeader = styled.header`
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  background: #333;
  padding: 10px 0;
  grid-area: AppHeader;
  display: flex;
  justify-content: flex-end;
  color: white;
`;

export const HeaderLink = styled(Link)`
  margin-right: auto;
  margin-left: auto;
  text-decoration: none;
`;

export const H1 = styled.h1`
  display: inline;
  color: white;
`;

export const User = styled.p`
  @media only screen and (max-width: 768px) {
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
