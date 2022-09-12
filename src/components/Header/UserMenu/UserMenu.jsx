import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.auth.email);
  const dispatch = useDispatch();
  const exit = () => {
    dispatch(logout());
  };

  // const googleUser = localStorage.getItem('email');
  // console.log(email);

  return (
    email && 
      <nav className={s.nav}>
        <span className={s.name}>{email[0].toUpperCase()}</span>

        <LogOut className={s.icon_logOut} onClick={exit} />
      </nav>

    //    googleUser && <nav className={s.nav}>
    //    <span className={s.name}>{googleUser[0].toUpperCase()}</span>
    //    <LogOut className={s.icon_logOut} onClick={exit}/>
    //  </nav>
    
  );
};

export default UserMenu; 
