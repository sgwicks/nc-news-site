import React from 'react';
import {
  StyledHeader,
  HeaderLink,
  H1,
  User,
  OrbImg
} from '../styles/HeaderStyles';
import GreenOrb from '../GreenOrb.png';

const Header = () => {
  return (
    <StyledHeader>
      <>
        <HeaderLink to='/'>
          <H1>NC News Now</H1>
        </HeaderLink>
        <User>
          <OrbImg src={GreenOrb} alt='logged in' /> happyamy2016
        </User>
      </>
    </StyledHeader>
  );
};

export default Header;
