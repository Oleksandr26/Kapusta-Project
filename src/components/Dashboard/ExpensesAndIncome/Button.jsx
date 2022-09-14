import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ExpensesAndIncome.module.css';

export const Button = ({ onClickSubmit, onClickReset }) => {
  return (
    <div>
      <button className={s.btn} type="submit" onClick={onClickSubmit}>
        Input
      </button>
      <button className={s.btn} type="submit" onClick={onClickReset}>
        Clear
      </button>
    </div>
  );
};

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
export const ButtonTransactions = () => {
  return (
    <ul className={s.wrapper_nav}>
      <li className={s.item}>
        <NavLink className={getLinkClassName} to="expenses">
          Expenses
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={getLinkClassName} to="income">
          Income
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink className={(getLinkClassName, s.summ__link)} to="summary">
          Summary
        </NavLink>
      </li>
    </ul>
  );
};
