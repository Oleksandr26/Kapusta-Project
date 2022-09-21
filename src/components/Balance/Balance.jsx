// import { TransactionDetailsMobile } from 'components/Dashboard/TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGetExpenseQuery, useGetIncomeQuery } from 'redux/transaction/transactionOperations';
import { getCurrentUser, handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const transactions = useSelector(state => state.auth.userData.transactions);
  const { pathname } = useLocation();
  const getUserBalance = useSelector(state => state.auth.userData.balance);
  const handleChange = e => {
    setAmount(e.target.value);
  };
  const inputStatus = transactions.length > 0;
  const { data: expenseData = [] } = useGetExpenseQuery();
  const { data: incomeData = [] } = useGetIncomeQuery();
  const { expenses } = expenseData;
  const { incomes } = incomeData;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, expenses, incomes]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    setAmount(getUserBalance);
  }, [getUserBalance]);

  useEffect(() => {
    if (
      pathname === '/transactions/expenses' &&
      transactions.length === 0 &&
      getUserBalance === 0
    ) {
      setModalActive(true);
      return;
    }
  }, [pathname, transactions, getUserBalance]);

  const handleToggle = () => {
    setModalActive(!modalActive);
  };

  const balanceNormalizer = amount;
  // .replace(/\d(?=(\d{3})+\.)/g, '$& ');

  const confirmBalance = total => {
    dispatch(handleUpdateUserBalance(total));
  };
  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <div className={s.wrap}>
        <div className={s.amount}>
          <input
            className={s.input}
            type="number"
            name="balance"
            value={balanceNormalizer}
            onChange={handleChange}
            disabled={inputStatus}
          />
        </div>

        <button
          className={s.confirmBtn}
          type="button"
          onClick={() => confirmBalance(amount)}
          disabled={inputStatus}
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
