import s from './UserMenu.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from 'redux/auth/auth-operations';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';

const UserMenu = () => {
  const email = useSelector(state => state.auth.userData.email);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(handleLogout());
  };

  return (
    email && (
      <nav className={s.nav}>
        <span className={s.name}>{email[0].toUpperCase()}</span>

        <LogOut className={s.icon_logOut} onClick={exit} />
      </nav>
    )
  );
};

export default UserMenu;
