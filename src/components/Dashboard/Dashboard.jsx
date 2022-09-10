// import s from './Dashboard.module.css';
import Button from '@mui/material/Button';
import { Income } from './Income/Income';
import { Expenses } from './Expenses/Expenses';
import { useState } from 'react';

const Dashboard = () => {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);

  const getExpensesStatistics = () => {
    setShowExpenses(true);
    setShowIncome(false);
  };

  const getIncomeStatistics = () => {
    setShowIncome(true);
    setShowExpenses(false);
  };

  return (
    <div>
      <Button variant="text" onClick={getExpensesStatistics}>
        Expenses
      </Button>
      <Button variant="text" onClick={getIncomeStatistics}>
        Income
      </Button>
      {showExpenses ? <Expenses /> : <></>}
      {showIncome ? <Income /> : <></>}
    </div>
  );
};

export default Dashboard;
