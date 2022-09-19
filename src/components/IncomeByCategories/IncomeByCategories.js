import s from './IncomeByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { InfinitySpin } from 'react-loader-spinner';
import sprite from 'assets/svg/icons.svg';
import backgroundSprite from 'assets/svg/symbols.svg';
import {
  useGetIncomeCategoriesQuery,
  useGetIncomeQuery,
} from 'redux/transaction/transactionOperations';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import categoriesData from './categoriesData.json';
import { useEffect } from 'react';

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

const IncomeByCategories = ({
  dateTransactionFilter,
  setCategory,
  category,
  reportsType,
}) => {
  const { data: incomeCategories } = useGetIncomeCategoriesQuery();
  const { data = [], isFetching } = useGetIncomeQuery();
  const { incomes = [] } = data;
  const location = useLocation();
  const result = incomeCategories?.map(item => ({
    name: item,
    amount: dateTransactionFilter(incomes).reduce((acc, cost) => {
      return item === cost.category ? acc + cost.amount : acc;
    }, 0),
    convertName: categoriesData[item],
  }));

  const mostIncomeCategory = [...result].sort(
    (firstAmount, secondAmount) => secondAmount.amount - firstAmount.amount
  )[0].name;
  const showMostIncomeCategoryDiagram =
    location.pathname === '/reports/Products';

  useEffect(() => {
    if (reportsType === true) setCategory(mostIncomeCategory);
  }, [setCategory, mostIncomeCategory, reportsType]);

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
          {showMostIncomeCategoryDiagram && (
            <Navigate to={categoriesData[mostIncomeCategory]} />
          )}
        </>
      )}
    </>
  );
};

export default IncomeByCategories;
