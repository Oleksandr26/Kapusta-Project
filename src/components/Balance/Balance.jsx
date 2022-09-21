// import { TransactionDetailsMobile } from 'components/Dashboard/TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useGetExpenseQuery, useGetIncomeQuery } from 'redux/transaction/transactionOperations';
import { getCurrentUser, handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = () => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);
  const transactions = useSelector(state => state.auth.userData.transactions);
  const { pathname } = useLocation();
  const getUserBalance = useSelector(state => state.auth.userData.balance);
  const [enteredBalance, setEnteredBalance] = useState(getUserBalance);

  const [amount, setAmount] = useState(
    `${getUserBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')} UAH`
  );

  const handleChange = e => {
    const { value } = e.target;
    if (!Number(value) && value) return;
    setAmount(value);
    setEnteredBalance(value);
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
    setAmount(`${getUserBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')} UAH`);
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

  const confirmBalance = e => {
    e.preventDefault();
    const value = Number(enteredBalance).toFixed(2);
    dispatch(handleUpdateUserBalance(Number(value)));
    e.target.balance.blur();
  };

  const onFocus = () => {
    setAmount('');
  };

  const onBlur = () => {
    setAmount(`${getUserBalance.toFixed(2)} UAH`);
  };

  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <form className={s.wrap} onSubmit={confirmBalance}>
        <div className={s.amount}>
          <input
            className={s.input}
            name="balance"
            value={amount}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={inputStatus}
          />
        </div>

        <button className={s.confirmBtn} type="submit" disabled={inputStatus}>
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
      </form>
    </div>
  );
};

export default Balance;
