import Modal from 'components/Modal/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleUpdateUserBalance } from '../../redux/auth/auth-operations';
import s from './Balance.module.css';

const Balance = () => {
  const [modalActive, setModalActive] = useState(false);
  const userBalance = useSelector(state => state.auth.userData.balance);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userBalance === 0) {
      setModalActive(true);
      return;
    }
  }, [userBalance]);

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
    </div>
  );
};

export default Balance;
