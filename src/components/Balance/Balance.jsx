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
    <div>
      Balance:<div>{newBalance}грн </div>
      <div>
        <button
          className={s.item}
          type="button"
          onClick={() => updateBalance({ newBalance })}
        >
          update Balance | confirm
        </button>
      </div>
    </div>
  );
};

export default Balance;
