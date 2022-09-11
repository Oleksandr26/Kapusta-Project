import s from './MonthTotal.module.css';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';

export default function MonthDefault({ date }) {
  const formatDate = date => {
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    return [year, month].join('-');
  };

  const cashFlow = useGetPeriodDataQuery(formatDate(date));

  const incomeTotal = cashFlow.currentData?.incomes.incomeTotal;
  const expenseTotal = cashFlow.currentData?.expenses.expenseTotal;

  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          Expenses: <span className={s.extense}>-{expenseTotal} грн.</span>
        </li>
        <li className={s.item}>
          Income: <span className={s.income}>+{incomeTotal} грн.</span>
        </li>
      </ul>
    </>
  );
}
