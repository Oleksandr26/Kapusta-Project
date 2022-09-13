// import { TransactionDetailsMobile } from 'components/Dashboard/TransactionDetails/TransactionsDetailsMobile/TransactionsDetailsMobile';
import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = () => {
  const dispatch = useDispatch();
  const userBalance = useSelector(state => state.auth.userData.balance);
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

  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <div className={s.wrap}>
        <div className={s.amount}>{userBalance} UAH</div>
        <button
          className={s.confirmBtn}
          type="button"
          onClick={() => dispatch(handleUpdateUserBalance(40))}
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
