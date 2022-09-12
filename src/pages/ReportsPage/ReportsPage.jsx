import s from './ReportsPage.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
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
  const [category, setCategory] = useState(null);

  // --- В normalizedStateDate Преобразуем дату со state в формат для сравнения с фортатом даты транзакции которая приходит с сервера----
  const normalizedStoreDate = date.toLocaleString('en', {
    year: 'numeric',
    month: 'long',
  });

  // --- в dateTransactionFilter Сравниваем дату со state(дата со стейка это период который выбрал пользователь)
  // --- с датой всех транзакций пользователя которые хранятся на сервере
  // --- если периоды(месяц) совпадают то возвращаем эту транзакцию(обьект) в новый массив
  const dateTransactionFilter = transactions =>
    transactions?.filter(filteredItems => {
      const unixDate = new Date(filteredItems.date);
      const normalizedTransactionDate = unixDate.toLocaleString('en', {
        year: 'numeric',
        month: 'long',
      });

      return normalizedStoreDate === normalizedTransactionDate;
    });

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Link className={s.btn} to="/transactions">
          <BackArrow className={s.icon} /> Main page
        </Link>

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
        <IncomeByCategories
          dateTransactionFilter={dateTransactionFilter}
          setCategory={setCategory}
          category={category}
        />
        <ExpenseByCategories
          dateTransactionFilter={dateTransactionFilter}
          setCategory={setCategory}
          category={category}
        />
      </div>

<<<<<<< Updated upstream
      <div className={s.chart_container}>
        <Diagram
          dateTransactionFilter={dateTransactionFilter}
          category={category}
        />
=======
      <div>
        <Diagram dateTransactionFilter={dateTransactionFilter} category={category} />
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default ReportPage;
