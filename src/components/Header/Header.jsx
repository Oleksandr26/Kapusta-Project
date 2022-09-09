import s from './Header.module.css';
import React from 'react';
import Logo from './Logo/Logo';
// import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <Logo />
        </li>
        <li> {/* <Navigation /> */} </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </div>
  );
};

export default Header;
