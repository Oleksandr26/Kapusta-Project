import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

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
  // const { pathname } = useLocation();
  // const showButtons = pathname === '/transactions' && window.innerWidth < 768;
  // console.log('showButtons: ', showButtons);
  return (
    <>
      {' '}
      {/* {showButtons && ( */}
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
      {/* )} */}
    </>
  );
};
