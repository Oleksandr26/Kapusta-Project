import { useEffect, useState } from 'react';
import {
  useGetIncomeQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';
import s from './Summary.module.css';

const Summary = ({ params = '' }) => {
  const checkType = Object?.values(params)[0];
  const [showIncome, setShowIncome] = useState(false);
  const [showExpenses, setShowExpenses] = useState(true);

  const {
    data: incomeStats /*isLoading: incomeIsLoading, error: incomeError*/,
  } = useGetIncomeQuery({ skip: showIncome });
  const {
    data: expenseStats /*isLoading: expenseIsLoading, error: expenseError*/,
  } = useGetExpenseQuery({ skip: showExpenses });

  useEffect(() => {
    if (checkType === 'expenses') {
      setShowExpenses(true);
      setShowIncome(false);
      return;
    }
    if (checkType === 'incomes') {
      setShowIncome(true);
      setShowExpenses(false);
    }
  }, [checkType]);

  const getMonthArray = () => {
    if (showIncome) {
      const objectToArray = Object.entries(incomeStats.monthsStats);
      return objectToArray.map(ent => Object.assign({}, ent));
    }

    if (showExpenses) {
      const objectToArray = Object.entries(expenseStats.monthsStats);
      return objectToArray.map(ent => Object.assign({}, ent));
    }
  };

  return (
    <div className={s.summary}>
      <h2 className={s.title}>SUMMARY</h2>
      {expenseStats &&
        getMonthArray()
          .filter(month => typeof month[1] === 'number')
          .map(month => (
            <div key={month[0]} className={s.month}>
              <span className={s.text}>{month[0]}</span>
              <span className={s.text}>
                {month[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Summary;
