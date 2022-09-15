// import { TransactionDetailsMobile } from 'components/Dashboard/TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';
import { handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = ({ dateReports, dateTransactions }) => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const transactions = useSelector(state => state.auth.userData.transactions);
  const { pathname } = useLocation();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (
      pathname === '/transactions' ||
      pathname === '/transactions/expenses' ||
      pathname === '/transactions/incomes'
    ) {
      setDate(dateTransactions);
    }
    if (pathname === '/reports' || pathname === '/reports/*') {
      setDate(dateReports);
    }
  }, [pathname, dateTransactions, dateReports]);

  useEffect(() => {
    if (pathname === '/transactions/expenses' && transactions.length === 0) {
      setModalActive(true);
      return;
    }
  }, [pathname, transactions]);

  const handleToggle = () => {
    setModalActive(!modalActive);
  };

  const formatDate = date => {
    let month = (date?.getMonth() + 1).toString();
    let year = date?.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    return [year, month].join('-');
  };
  const { currentData, isFetching } = useGetPeriodDataQuery(formatDate(date));

  const monthlyBalance =
    currentData?.incomes.incomeTotal - currentData?.expenses.expenseTotal;

  const balanceNormalizer =
    monthlyBalance?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';

  const confirmBalance = total => {
    dispatch(handleUpdateUserBalance(total));
  };
  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <div className={s.wrap}>
        <div className={s.amount}>
          {isFetching ? (
            <div className={s.spinner}>
              <InfinitySpin width="80" color="#3f51b5" />
            </div>
          ) : (
            <>{balanceNormalizer}</>
          )}
        </div>

        <button
          className={s.confirmBtn}
          type="button"
          onClick={() => confirmBalance(monthlyBalance)}
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
    </div>
  );
};

export default Balance;
