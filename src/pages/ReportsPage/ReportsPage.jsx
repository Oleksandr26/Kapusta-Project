import s from './ReportsPage.module.css';
import React from 'react';
import Balance from 'components/Balance/Balance';

import MonthTotal from 'components/MonthTotal/MonthTotal';
import ReportsByCategories from 'components/ReportsByCategories/ReportsByCategories';
import { Diagram } from 'components/Diagram/Diagram';

const ReportPage = () => {
  return (
    <>
      <div className={s.header}>
        <button className={s.item}> ---Back to Main menu--- </button>
        <div className={s.item}>Balance</div>
        <button className={s.item}>Main menu</button>
        <div className={s.item}>
          <Balance />
        </div>
        <div className={s.item}>Calendar</div>
      </div>
      <div>
        <MonthTotal />
      </div>
      <div>
        <ReportsByCategories />
      </div>
      <div>
        <Diagram />
      </div>
    </>
  );
};

export default ReportPage;
