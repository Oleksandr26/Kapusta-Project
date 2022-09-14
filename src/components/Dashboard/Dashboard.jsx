import s from './Dashboard.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import { ButtonTransactions } from './ExpensesAndIncome/Button';

// const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
const Dashboard = () => {
  const location = useLocation();
  // const bool = location.pathname === '/transactions' || width < 768;
  return (
    <div className={s.container}>
      {location.pathname === '/transactions' && (
        <>
          <TransactionDetailsMobile />
          <ButtonTransactions />
        </>
      )}
      {/* // <ButtonTransactions />
        // <ul className={s.wrapper_nav}>
        //   <li className={s.item}>
        //     <NavLink className={getLinkClassName} to="expenses">
        //       Expenses
        //     </NavLink>
        //   </li>
        //   <li className={s.item}>
        //     <NavLink className={getLinkClassName} to="income">
        //       Income
        //     </NavLink>
        //   </li>
        //   <li className={s.item}>
        //     <NavLink className={(getLinkClassName, s.summ__link)} to="summary">
        //       Summary
        //     </NavLink>
        //   </li>
        // </ul> */}
    </div>
  );
};

export default Dashboard;
