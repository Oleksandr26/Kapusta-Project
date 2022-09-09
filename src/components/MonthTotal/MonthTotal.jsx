import { useSelector } from 'react-redux';

import s from './MonthTotal.module.css';

export default function MonthDefault() {
  const userTransactions = useSelector(
    state => state.auth.userData.transactions
  );

  let extenseAmount = 0;
  let incomeAmount = 0;

  userTransactions?.map(({ amount, category }) => {
    if (category !== 'З/П' && category !== 'Доп. доход') {
      return (extenseAmount += amount);
    } else {
      return (incomeAmount += amount);
    }
  });

  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          Expenses: <span className={s.extense}>-{extenseAmount} грн.</span>
        </li>
        <li className={s.item}>
          Income: <span className={s.income}>+{incomeAmount} грн.</span>
        </li>
      </ul>
    </>
  );
}
