// import { TransactionDetailsMobile } from 'components/Dashboard/TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';
import { handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = ({ date }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const transactions = useSelector(state => state.auth.userData.transactions);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/transactions' && transactions.length === 0) {
      setModalActive(true);
      return;
    }
  }, [pathname, transactions]);

  const handleToggle = () => {
    setModalActive(!modalActive);
  };

  const formatDate = date => {
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    return [year, month].join('-');
  };

  const { currentData } = useGetPeriodDataQuery(formatDate(date));
  const incomeTotal = currentData?.incomes.incomeTotal;
  const expenseTotal = currentData?.expenses.expenseTotal;
  const monthlyBalance = incomeTotal - expenseTotal;

  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <div className={s.wrap}>
        <div className={s.amount}>{monthlyBalance} UAH</div>
        <button
          className={s.confirmBtn}
          type="button"
          onClick={() => dispatch(handleUpdateUserBalance())}
        >
          CONFIRM
        </button>

        {modalActive && (
          <Modal
            className={s.modal}
            handleToggle={handleToggle}
            active={modalActive}
            setActive={setModalActive}
          />
        )}
      </div>
      {/* <TransactionDetailsMobile /> */}
    </div>
  );
};

export default Balance;
