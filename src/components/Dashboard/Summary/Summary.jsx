import {useState} from "react";
import {useGetIncomeQuery, useGetExpenseQuery} from 'redux/transaction/transactionOperations';
import s from './Summary.module.css';

const Summary = () => {
  const [showIncome, setShowIncome] = useState(false);
  const [showExpenses, setShowExpenses] = useState(true);

  const {data: incomeStats, /*isLoading: incomeIsLoading, error: incomeError*/} = useGetIncomeQuery({skip: showIncome});
  const {data: expenseStats, /*isLoading: expenseIsLoading, error: expenseError*/} = useGetExpenseQuery({skip: showExpenses});

  const fetchData = (e) => {
    const name = e.currentTarget.name;

    switch (name) {
      case "expensesBtn":
        setShowExpenses(true)
        setShowIncome(false)
        break;

      case "incomeBtn":
        setShowIncome(true)
        setShowExpenses(false)
        break;

      default:
        return;
    }
  }

  const getMonthArray = () => {
    if(showIncome){
      const objectToArray = Object.entries(incomeStats.monthsStats);
      return objectToArray.map(ent => Object.assign({}, ent))
    }

    if(showExpenses){
      const objectToArray = Object.entries(expenseStats.monthsStats);
      return objectToArray.map(ent => Object.assign({}, ent))
    }
  }

  return (
    <div className={s.summary}>
      <h2 className={s.title}>SUMMARY</h2>
      <div className={s.buttonWrapper}>
        <button name="expensesBtn" className={`${s.button} ${showExpenses && s.activeBtn}`} onClick={fetchData}>EXPENSES</button>
        <button name="incomeBtn" className={`${s.button} ${showIncome && s.activeBtn}`} onClick={fetchData}>INCOME</button>
      </div>
      {expenseStats && getMonthArray().filter(month => typeof month[1] === 'number').map(month => (
        <div key={month[0]} className={s.month}>
          <span className={s.text}>{month[0]}</span>
          <span className={s.text}>{month[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default Summary;
