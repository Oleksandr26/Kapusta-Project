import s from './Dashboard.module.css';
import { useLocation } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import { ButtonTransactions } from './ExpensesAndIncome/Button';

// const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
const Dashboard = () => {
  const location = useLocation();
  const showBtn =
    location.pathname === '/transactions' && window.innerWidth < 768;
  return (
    <div className={s.container}>
      {location.pathname === '/transactions' && (
        <div className={s.wrap}>
          <TransactionDetailsMobile />
          {showBtn && <ButtonTransactions />}
          {/* <ButtonTransactions /> */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
