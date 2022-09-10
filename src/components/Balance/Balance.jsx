import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateBalanceMutation } from 'redux/user/userOperations';
import s from './Balance.module.css';

const Balance = () => {
  useEffect(() => {}, []);

  let newBalanceeeee = useSelector(state => {
    console.log('state: ', state);
    //   //когда появиться state нужно сделать правильный возврат
    return state;
  });

  const [updateBalance, updateBalanceData] = useUpdateBalanceMutation();
  console.log('updateBalanceData: ', updateBalanceData);
  let newBalance = 120000;

  const onCloseModal = e => {
    console.log('e.target: ', e.target);
    console.log('e.currentTarget : ', e.currentTarget);
    if (e.currentTarget === e.target) {
      return s.closeModal;
    }
  };

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
        {/* <div className={s.partOfModal}>
          <img src="assets/trangleModal.png" alt="модальное окно" />
        </div> */}
        <div className={s.modal} onClick={onCloseModal}>
          <p>
            Hello! To get started, enter the current balance of your account!
          </p>
          <p className={s.text}>You can't spend money until you have it :)</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
