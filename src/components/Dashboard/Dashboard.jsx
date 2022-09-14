import s from './Dashboard.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
const Dashboard = () => {
  const width = window.innerWidth;
  console.log('width: ', width);
  const location = useLocation();
  const bool = location.pathname === '/transactions' || width > 768;
  console.log('bool: ', bool);
  return (
    <div className={s.container}>
      {location.pathname === '/transactions' && <TransactionDetailsMobile />}
      {bool && (
        <ul className={s.wrapper_nav}>
          <li className={s.item}>
            <NavLink className={getLinkClassName} to="expenses">
              Expenses
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={getLinkClassName} to="income">
              Income
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={(getLinkClassName, s.summ__link)} to="summary">
              Summary
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
