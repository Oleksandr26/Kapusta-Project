import s from './Dashboard.module.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.link} to="expenses">
        Expenses
      </NavLink>
      <NavLink className={s.link} to="income">
        Income
      </NavLink>
      <NavLink className={s.link} to="summary">
        Summary
      </NavLink>
    </div>
  );
};

export default Dashboard;
