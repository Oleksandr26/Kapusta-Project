import s from './MonthTotal.module.css';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';

export default function MonthDefault() {
  const formatDate = date => {
    let d = new Date();
    let month = (d.getMonth() + 1).toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    return [year, month].join('-');
  };

  // const cashFlow = useGetPeriodDataQuery(formatDate());

  // const { incomeTotal } = cashFlow?.currentData?.incomes;
  // const { expenseTotal } = cashFlow?.currentData?.expenses;

  // return (
  //   <>
  //     <ul className={s.list}>
  //       <li className={s.item}>
  //         Expenses: <span className={s.extense}>-{expenseTotal} грн.</span>
  //       </li>
  //       <li className={s.item}>
  //         Income: <span className={s.income}>+{incomeTotal} грн.</span>
  //       </li>
  //     </ul>
  //   </>
  // );
}
