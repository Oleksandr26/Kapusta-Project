import { useEffect, useState } from 'react';
import { useGetIncomeQuery, useGetExpenseQuery } from 'redux/transaction/transactionOperations';
import s from './Summary.module.css';

const Summary = ({ params = '' }) => {
  const checkType = Object?.values(params)[0];
  const [showIncomes, setShowIncomes] = useState(false);
  const [showExpenses, setShowExpenses] = useState(true);

  const { data: incomeStats = [] } = useGetIncomeQuery();
  const { data: expenseStats = [] } = useGetExpenseQuery();

  useEffect(() => {
    if (checkType === 'expenses') {
      setShowExpenses(true);
      setShowIncomes(false);
      return;
    }
    if (checkType === 'incomes') {
      setShowIncomes(true);
      setShowExpenses(false);
    }
  }, [checkType]);

  const getExpenseMonthArray = () => {
    const objectToArray = Object.entries(expenseStats.monthsStats);
    return objectToArray.map(ent => Object.assign({}, ent));
  };

  const getIncomeMonthArray = () => {
    const objectToArray = Object.entries(incomeStats.monthsStats);
    return objectToArray.map(ent => Object.assign({}, ent));
  };

  const renderSummary = data => {
    return data
      .filter(month => typeof month[1] === 'number')
      .map(month => (
        <div key={month[0]} className={s.month}>
          <span className={s.text}>{month[0]}</span>
          <span className={s.text}>{month[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}</span>
        </div>
      ))
      .reverse();
  };

  const expenseSummaryStatus = expenseStats?.expenses.length > 0;
  const incomeSummaryStatus = incomeStats?.incomes.length > 0;

  return (
    <div className={s.summary}>
      <h2 className={s.title}>SUMMARY</h2>
      {showExpenses && expenseSummaryStatus && renderSummary(getExpenseMonthArray())}
      {showExpenses && !expenseSummaryStatus && (
        <div className={s.month}>
          <p className={`${s.text} ${s.note}`}>You don't have expense transactions</p>
        </div>
      )}

      {showIncomes && incomeSummaryStatus && renderSummary(getIncomeMonthArray())}
      {showIncomes && !incomeSummaryStatus && (
        <div className={s.month}>
          <p className={`${s.text} ${s.note}`}>You don't have income transactions</p>
        </div>
      )}
    </div>
  );
};

export default Summary;
