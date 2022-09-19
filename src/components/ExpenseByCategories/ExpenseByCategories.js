import s from './ExpenseByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { InfinitySpin } from 'react-loader-spinner';
import sprite from 'assets/svg/icons.svg';
import backgroundSprite from 'assets/svg/symbols.svg';
import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import categoriesData from './categoriesData.json';
import { useEffect } from 'react';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const ExpenseByCategories = ({
  dateTransactionFilter,
  setCategory,
  category,
  reportsType,
}) => {
  const { data: expenseCategories } = useGetExpenseCategoriesQuery();
  const { data = [], isFetching } = useGetExpenseQuery();
  const { expenses = [] } = data;
  const location = useLocation();
  const result = expenseCategories?.map(item => ({
    name: item,
    amount: dateTransactionFilter(expenses)?.reduce((acc, transaction) => {
      return item === transaction.category ? acc + transaction.amount : acc;
    }, 0),
    convertName: categoriesData[item],
  }));

  const mostExpensiveCategory = [...result].sort(
    (firstAmount, secondAmount) => secondAmount.amount - firstAmount.amount
  )[0].name;
  const showMostExpesiveCategoryDiagram =
    location.pathname === '/reports' ||
    location.pathname === '/reports/Spin-off' ||
    location.pathname === '/reports/Salary';

  useEffect(() => {
    if (reportsType === false) setCategory(mostExpensiveCategory);
  }, [setCategory, mostExpensiveCategory, reportsType]);

  const elements = result
    ?.filter(({ amount }) => amount > 0)
    ?.map(({ name, amount, convertName }) => {
      const iconPath = sprite + `#${name}`;
      const backgroundPath = backgroundSprite + `#${name}`;
      const amountNormalizer = amount
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, '$& ');

      const handleSetCategory = () => {
        if (category === name) {
          return;
        }
        setCategory(name);
      };
      return (
        <li className={s.item} key={nanoid()} onClick={handleSetCategory}>
          <p className={s.info}>{amountNormalizer}</p>
          <NavLink to={convertName} className={getLinkClassName}>
            <svg className={s.iconBackground} width="56px" height="56px">
              <use href={backgroundPath}></use>
            </svg>
            <svg className={s.icon} width="56px" height="56px">
              <use href={iconPath}></use>
            </svg>
          </NavLink>
          <p className={s.info}>{name}</p>
        </li>
      );
    });
  return (
    <>
      {isFetching ? (
        <div className={s.spinner}>
          <InfinitySpin width="200" color="#3f51b5" />
        </div>
      ) : (
        <>
          <ul className={s.list}>{elements}</ul>
          {showMostExpesiveCategoryDiagram && (
            <Navigate to={categoriesData[mostExpensiveCategory]} />
          )}
        </>
      )}
    </>
  );
};

export default ExpenseByCategories;
