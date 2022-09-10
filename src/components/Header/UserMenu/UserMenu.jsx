import s from './UserMenu.module.css';

import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

// const getActive = ({ isActive }) => {
//   return isActive ? s.activeLink : s.link;
// };

const UserMenu = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
  };

  return (
    <nav className={s.nav}>
      {/* <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getActive} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getActive} to="/contacts">
            Phonebook
          </NavLink>
        </li>
      </ul> */}
      {/* <div className={s.thumb}> */}
        {/* <> */}
          {/* <span className={s.title}>
            Welcome, */}
            <span className={s.name}>
              {auth?.user?.name}
              Имя пользователя
            </span>
          {/* </span> */}
          <button className={s.button} type="button" onClick={exit}>
          Log Out
          </button>
        {/* </> */}
      {/* </div> */}
    </nav>
  );
};

export default UserMenu;
