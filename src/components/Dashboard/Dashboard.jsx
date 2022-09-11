// import s from './Dashboard.module.css';
import Button from '@mui/material/Button';
import { Income } from './Income/Income';
import { Expenses } from './Expenses/Expenses';
import { useState } from 'react';
import Summary from "./Summary/Summary";

const Dashboard = () => {
  const [showExpenses, setShowExpenses] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const getExpensesStatistics = () => {
    setShowExpenses(true);
    setShowIncome(false);
    setShowSummary(false);

  };

  const getIncomeStatistics = () => {
    setShowIncome(true);
    setShowExpenses(false);
    setShowSummary(false);
  };

  const getSummaryStatistics = () => {
    setShowSummary(true)
    setShowIncome(false);
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
      <Button variant="text" onClick={getSummaryStatistics}>
        Summary
      </Button>
      {showExpenses ? <Expenses /> : null}
      {showIncome ? <Income /> : null}
      {showSummary ? <Summary/> : null}
    </div>
  );
};

export default Dashboard;
