import s from './Dashboard.module.css';
import { useLocation } from 'react-router-dom';
import { TransactionDetailsMobile } from './TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import { ButtonTransactions } from './ExpensesAndIncome/Button';
import useWindowDimensions from 'redux/hooks/hooks';

const Dashboard = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const showBtn = location.pathname === '/transactions' && Boolean(width) < 768;
  return (
    <div className={s.container}>
      {location.pathname === '/transactions' && (
        <div className={s.wrap}>
          <TransactionDetailsMobile />
          {showBtn && <ButtonTransactions />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
