import s from './ReportsPage.module.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Balance from 'components/Balance/Balance';
import MonthTotal from 'components/MonthTotal/MonthTotal';
import ExpenseByCategories from 'components/ExpenseByCategories/ExpenseByCategories';
import IncomeByCategories from 'components/IncomeByCategories/IncomeByCategories';
import ReportsDate from 'components/ReportsDate/ReportsDate';
import { ReactComponent as BackArrow } from 'assets/svg/back-arrow.svg';
import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RigthArrow } from 'assets/svg/right-arrow.svg';
import Chart from 'components/Chart/Chart';

const ReportPage = () => {
  const [date, setDate] = useState(new Date());
  const [reportsType, setReportsType] = useState(false);
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

  const changeReportsVision = () => {
    setReportsType(!reportsType);
    setCategory(null);
  };

  return (
    <main className={s.meta}>
      <div className={s.container}></div>
      <div className={s.main}>
        <div className={s.header}>
          <Link className={s.btn} to="/transactions/expenses">
            <BackArrow className={s.icon} /> <p className={s.text}>Main page</p>
          </Link>
          <div className={s.item}>
            <Balance />
          </div>
          <div className={s.item}>
            <ReportsDate date={date} setDate={setDate} />
          </div>
        </div>
        <MonthTotal date={date} />
        <div className={s.block}>
          <div className={s.types}>
            <button type="button" className={s.leftArrow} onClick={() => changeReportsVision()}>
              <LeftArrow className={s.iconArrow} />
            </button>
            <p className={s.title}> {reportsType ? 'Income' : 'Expenses'} </p>
            <button type="button" className={s.rightArrow} onClick={() => changeReportsVision()}>
              <RigthArrow className={s.iconArrow} />
            </button>
          </div>

          {reportsType ? (
            <IncomeByCategories
              dateTransactionFilter={dateTransactionFilter}
              setCategory={setCategory}
              category={category}
              reportsType={reportsType}
              date={date}
            />
          ) : (
            <ExpenseByCategories
              dateTransactionFilter={dateTransactionFilter}
              setCategory={setCategory}
              category={category}
              reportsType={reportsType}
              date={date}
            />
          )}
        </div>
        <div className={s.chart_container} id="flexible">
          <div className={s.chart_lines}>
            <Routes>
              <Route
                path=":categoryName"
                element={
                  <Chart dateTransactionFilter={dateTransactionFilter} category={category} />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportPage;
