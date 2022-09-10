import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateBalanceMutation } from 'redux/user/userOperations';
import s from './Balance.module.css';

const Balance = () => {
  const [modalActive, setModalActive] = useState(true);
  // useEffect(() => {

  // }, []);

  let newBalance = useSelector(state => {
    return state.auth.userData.balance;
  });

  const [updateBalance, updateBalanceData] = useUpdateBalanceMutation();

  return (
    <div className={s.container}>
      <span className={s.balance}>Balance:</span>

      <div className={s.wrap}>
        <div className={s.amount}>{newBalance} UAH</div>
        <button
          className={s.confirmBtn}
          type="button"
          onClick={() => updateBalance({ newBalance })}
        >
          CONFIRM
        </button>
        <button type="button" onClick={() => setModalActive(true)}>
          open modal
        </button>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    </div>
  );
};

export default Balance;
