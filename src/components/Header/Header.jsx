// import s from './Header.module.css'
import React from 'react';
import Logo from './Logo/Logo';
// import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <>
      <Logo />
      {/* <Navigation /> */}
      <UserMenu />
    </>
  );
};

export default Header;
