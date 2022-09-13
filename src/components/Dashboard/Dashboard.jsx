import s from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';

const Dashboard = () => {
  return (
    <div className={s.container}>
      <TransactionDetailsMobile />
      <NavLink className={s.link} to="expenses">
        Expenses
      </NavLink>
      <NavLink className={s.link} to="income">
        Income
      </NavLink>
      <NavLink className={s.link} to="summary">
        Summary
      </NavLink>
    </div>
  );
};

export default Dashboard;
