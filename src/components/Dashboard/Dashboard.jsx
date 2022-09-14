import s from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';

import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';

const Dashboard = () => {
  return (
    <div className={s.container}>
      <TransactionDetailsMobile />
      <NavLink className={s.link} to="expenses">
        <div className={s.button}>Expenses</div>
      </NavLink>
      <NavLink className={s.link} to="incomes">
        <div className={s.button}>Income</div>
      </NavLink>
      <NavLink className={s.link} to="summary">
        <div className={s.button}>Summary</div>
      </NavLink>
    </div>
  );
};

export default Dashboard;
