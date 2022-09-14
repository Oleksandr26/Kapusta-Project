import s from './Dashboard.module.css';
import { useLocation } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import { ButtonTransactions } from './ExpensesAndIncome/Button';

// const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
const Dashboard = () => {
  const location = useLocation();
  // const bool = location.pathname === '/transactions' || width < 768;
  return (
    <div className={s.container}>
      {location.pathname === '/transactions' && (
        <div className={s.wrap}>
          <TransactionDetailsMobile />
          <ButtonTransactions />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
