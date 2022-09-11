import s from './Dashboard.module.css';
import { ExpensesAndIncome } from './ExpensesAndIncome/ExpensesAndIncome';
import { NavLink, Route, Routes } from 'react-router-dom';
import Balance from 'components/Balance/Balance';

const Dashboard = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to="/expenses">
        Expenses
      </NavLink>
      <NavLink className={s.link} to="/income">
        Income
      </NavLink>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Balance />
            </>
          }
        ></Route>
        <Route path="expenses" element={<ExpensesAndIncome />} />
        <Route path="income" element={<ExpensesAndIncome />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
