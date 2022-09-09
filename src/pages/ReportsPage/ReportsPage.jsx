import s from './ReportsPage.module.css';
import React from 'react';
import Balance from 'components/Balance/Balance';

const ReportPage = () => {
  return (
    <>
      <div className={s.header}>
        <button className={s.item}>Main menu</button>
        <div className={s.item}>
          <Balance />
        </div>
        <div className={s.item}>Calendar</div>
      </div>
    </>
  );
};

export default ReportPage;
