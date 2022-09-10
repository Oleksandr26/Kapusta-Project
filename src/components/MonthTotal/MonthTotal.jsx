import s from './MonthTotal.module.css';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';

export default function MonthDefault({ date }) {
  console.log('date: ', date);
  // const isLogin = useSelector(store => store.auth.accessToken);
  // const cashFlow = useGetPeriodDataQuery((date = '2022-07'));
  // console.log('cashFlow: ', cashFlow);
  // const { incomeTotal } = cashFlow?.data?.incomes;
  // const { expenseTotal } = cashFlow?.data?.expenses;
  // return (
  //   <>
  //     <ul className={s.list}>
  //       <li className={s.item}>
  //         Expenses:{' '}
  //         <span className={s.extense}>-{expenseTotal.toFixed(2)} грн.</span>
  //       </li>
  //       <li className={s.item}>
  //         Income:{' '}
  //         <span className={s.income}>+{incomeTotal.toFixed(2)} грн.</span>
  //       </li>
  //     </ul>
  //   </>
  // );
}
