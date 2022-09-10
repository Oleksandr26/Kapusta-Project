import s from './UserMenu.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';

const UserMenu = () => {
  const userData = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
  };
  // console.log(userData.email);
  const user = userData.email;

  return (
    user && (
      <nav className={s.nav}>
        <span className={s.name}>{user[0].toUpperCase()}</span>

        <LogOut className={s.icon_logOut} onClick={exit} />
      </nav>
    )
  );
};

export default UserMenu;
