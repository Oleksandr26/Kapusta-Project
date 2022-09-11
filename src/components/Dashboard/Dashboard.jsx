import s from './Dashboard.module.css';
import { ExpensesAndIncome } from './ExpensesAndIncome/ExpensesAndIncome';
import { NavLink, Route, Routes } from 'react-router-dom';
import Balance from 'components/Balance/Balance';
import Summary from './Summary/Summary';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Dashboard = () => {
  const [showSummary, setShowSummary] = useState(false);

  const getSummaryStatistics = () => {
    setShowSummary(true);
  };

  return (
    <div className={s.container}>
      <NavLink className={s.link} to="/expenses">
        Expenses
      </NavLink>
      <NavLink className={s.link} to="/income">
        Income
      </NavLink>
      <NavLink className={s.link} to="/summary">
        Summary
      </NavLink>
      <Routes>
        <Route path="/" element={<Balance />} />
        <Route path="expenses" element={<ExpensesAndIncome />} />
        <Route path="income" element={<ExpensesAndIncome />} />
        <Route path="summary" element={<Summary />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
