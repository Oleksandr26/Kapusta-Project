import s from './UserMenu.module.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const getActive = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const UserMenu = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
  };

  return (
    <nav className={s.nav}>
      <div className={s.thumb}>
        <NavLink className={getActive} to="/">
          Home
        </NavLink>
        {auth.isLoggedIn && (
          <NavLink className={getActive} to="/contacts">
            Phonebook
          </NavLink>
        )}
      </div>
      <div className={s.thumb}>
        {auth.isLoggedIn && (
          <>
            <span className={s.title}>
              Welcome, <span className={s.name}>{auth.user.name}</span>
            </span>
            <button className={s.button} type="button" onClick={exit}>
              Exit
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default UserMenu;
