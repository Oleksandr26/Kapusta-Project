import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './ExpensesAndIncome.module.css';

export const Button = ({ onClickSubmit, onClickReset }) => {
  return (
    <>
      <button className={s.btn} type="submit" onClick={onClickSubmit}>
        INPUT
      </button>
      <button className={s.btn} type="submit" onClick={onClickReset}>
        CLEAR
      </button>
    </>
  );
};

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);
export const ButtonTransactions = () => {
  return (
    <div className={s.button__container}>
      <ul className={s.wrapper_nav}>
        <li className={s.item}>
          <NavLink className={getLinkClassName} to="/transactions/expenses">
            Expenses
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getLinkClassName} to="/transactions/incomes">
            Income
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
