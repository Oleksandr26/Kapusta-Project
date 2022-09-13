import s from './Header.module.css';
import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <div className={`${s.container} ${s.container_wrapper}`}>
      <div className={s.wrapper_logo}>
        <Logo className={s.logo} />
      </div>

      <UserMenu />
    </div>
  );
};

export default Header;
