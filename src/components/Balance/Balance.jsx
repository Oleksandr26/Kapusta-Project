import { useUpdateBalanceMutation } from 'redux/user/userOperations';
import s from './Balance.module.css';

const Balance = () => {
  // const userTransactions = useSelector(
  //   state => state.auth.userData.transactions
  // );
  const [updateBalance, updateBalanceData] = useUpdateBalanceMutation();
  console.log('updateBalanceData: ', updateBalanceData);
  let newBalance = 120000;
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
      </div>
    </div>
  );
};

export default Balance;
