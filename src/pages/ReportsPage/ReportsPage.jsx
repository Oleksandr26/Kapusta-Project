import s from './ReportsPage.module.css';
import React from 'react';
import { useState } from 'react';
import Balance from 'components/Balance/Balance';
import MonthTotal from 'components/MonthTotal/MonthTotal';
import ExpenseByCategories from 'components/ExpenseByCategories/ExpenseByCategories';
import { Diagram } from 'components/Diagram/Diagram';
import IncomeByCategories from 'components/IncomeByCategories/IncomeByCategories';
import ReportsDate from 'components/ReportsDate/ReportsDate';
import { ReactComponent as BackArrow } from 'assets/svg/back-arrow.svg';
const ReportPage = () => {
  const [date, setDate] = useState(() => new Date());
  return (
    <div className={s.container}>
      <div className={s.header}>
        <button className={s.btn}>
          <BackArrow className={s.icon} /> Main page
        </button>
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
        <IncomeByCategories date={date} />
        <ExpenseByCategories date={date} />
      </div>

      <div>
        <Diagram />
      </div>
    </div>
  );
};

export default ReportPage;
