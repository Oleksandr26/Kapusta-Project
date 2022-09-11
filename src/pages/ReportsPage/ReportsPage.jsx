import s from './ReportsPage.module.css';
import React from 'react';
import { useState } from 'react';
import Balance from 'components/Balance/Balance';
import MonthTotal from 'components/MonthTotal/MonthTotal';
import ExpenseByCategories from 'components/ExpenseByCategories/ExpenseByCategories';
import { Diagram } from 'components/Diagram/Diagram';
import IncomeByCategories from 'components/IncomeByCategories/IncomeByCategories';
import ReportsDate from 'components/ReportsDate/ReportsDate';

const ReportPage = () => {
  const formatDate = () => {
    let d = new Date();
    let month = (d.getMonth() + 1).toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    const result = [year, month].join('-');
    console.log('result: ', typeof result);
    return result;
  };

  const [date, setDate] = useState(() => formatDate());
  console.log('date: ', date);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <button className={s.item}> ---Back to Main menu--- </button>
        <div className={s.item}>
          <Balance />
        </div>
        <div className={s.item}>
          <ReportsDate date={date} setDate={setDate} />
        </div>
      </div>

      <div>
        <MonthTotal date={date} />
      </div>

      <div>
        <IncomeByCategories />
        <ExpenseByCategories />
      </div>

      <div>
        <Diagram />
      </div>
    </div>
  );
};

export default ReportPage;
