import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateBalanceMutation } from 'redux/user/userOperations';
import s from './Balance.module.css';

const Balance = () => {
  const [modalActive, setModalActive] = useState(false);
  const handleToggle = () => {
    setModalActive(!modalActive);
  };

  const newBalance = useSelector(state => {
    return state.auth.userData.balance;
  });

  useEffect(() => {
    if (newBalance === 0) {
      setModalActive(true);
    }
  }, [newBalance]);

  const [updateBalance] = useUpdateBalanceMutation();

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
