import s from './Header.module.css';
import React from 'react';
import {ReactComponent as Logo} from 'assets/svg/logo.svg'
// import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  return (
    <div className={`${s.container} ${s.container_wrapper}`} >
      {/* <ul className={s.list}> */}
        {/* <li className={s.item}> */}
        <div className={s.wrapper_logo}>
          <Logo className={s.logo}/>
        </div>          
        {/* </li> */}
        {/* <li> <Navigation /> </li> */}
        {/* <li> */}
          <UserMenu />
        {/* </li> */}
      {/* </ul> */}
    </div>
  );
};

export default Header;
