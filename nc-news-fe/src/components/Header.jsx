import React from 'react';
import { Link } from '@reach/router';
import { StyledHeader } from '../styles/AppStyles';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
        <h1>NC News Now</h1>
      </Link>
    </StyledHeader>
  );
};

export default Header;
