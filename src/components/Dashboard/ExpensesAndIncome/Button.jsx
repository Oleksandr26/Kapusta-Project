import React from 'react';
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
