import s from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Dashboard = () => {


  return (
    <div className={s.container}>
      <TransactionDetailsMobile />
      <ul className={s.wrapper_nav}>
        <li className={s.item}><NavLink className={getLinkClassName}   to="expenses">Expenses</NavLink></li>
        <li className={s.item}><NavLink className={getLinkClassName}  to="income">Income</NavLink></li>
        <li className={s.item}><NavLink className={getLinkClassName}  to="summary">Summary</NavLink></li>
      </ul>
    </div>
  );
};

export default Dashboard;
