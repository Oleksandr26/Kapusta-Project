import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const getActive = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const Navigation = () => {
  return (
    <>
      <NavLink className={getActive} to="/login">
        Authorization
      </NavLink>
      <NavLink className={getActive} to="/register">
        Registration
      </NavLink>
    </>
  );
};

export default Navigation;
