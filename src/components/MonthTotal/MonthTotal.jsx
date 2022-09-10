import { useSelector } from 'react-redux';
import { transactionApi } from 'redux/transaction/transactionOperations';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './MonthTotal.module.css';

export default function MonthDefault() {
  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(transactionApi.useGetIncomeQuery());
  //   dispatch(transactionApi.useGetExpenseQuery());
  // }, [dispatch]);
  // const incomes = transactionApi?.useGetIncomeQuery().currentData?.incomes;
  // const expenses = transactionApi?.useGetExpenseQuery().currentData?.expenses;
  // console.log(incomes);
  // console.log(expenses);


  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          Expenses: <span className={s.extense}>- грн.</span>
        </li>
        <li className={s.item}>
          Income: <span className={s.income}>+грн.</span>
        </li>
      </ul>
    </>
  );
}
