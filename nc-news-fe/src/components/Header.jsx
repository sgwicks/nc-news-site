import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className='Header'>
      <Link to='/'>
        <h1>NC News Now</h1>
      </Link>
    </header>
  );
};

export default Header;
