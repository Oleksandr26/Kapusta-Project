import s from './IncomeByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { InfinitySpin } from 'react-loader-spinner';
import sprite from 'assets/svg/icons.svg';
import backgroundSprite from 'assets/svg/symbols.svg';
import { useSelector } from 'react-redux';

import {
  useGetIncomeCategoriesQuery,
  useGetIncomeQuery,
} from 'redux/transaction/transactionOperations';
import { NavLink } from 'react-router-dom';

const getLinkClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

const IncomeByCategories = ({
  dateTransactionFilter,
  setCategory,
  category,
}) => {
  const isLogin = useSelector(store => store.auth.accessToken);
  const { data: incomeCategories } = useGetIncomeCategoriesQuery({
    skip: isLogin,
  });
  const { data = [], isFetching } = useGetIncomeQuery({ skip: isLogin });
  const { incomes = [] } = data;

  const result = incomeCategories?.map(item => ({
    name: item,
    amount: dateTransactionFilter(incomes).reduce((acc, cost) => {
      return item === cost.category ? acc + cost.amount : acc;
    }, 0),
    id:
      dateTransactionFilter(incomes)?.find(income => income.category === item)
        ?._id ?? '',
  }));

  const elements = result?.map(({ name, amount, id }) => {
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
        {id ? (
          <NavLink to={id} className={getLinkClassName}>
            <svg className={s.iconBackground} width="56px" height="56px">
              <use href={backgroundPath}></use>
            </svg>
            <svg className={s.icon} width="56px" height="56px">
              <use href={iconPath}></use>
            </svg>
          </NavLink>
        ) : (
          <div className={s.link}>
            <svg className={s.iconBackground} width="56px" height="56px">
              <use href={backgroundPath}></use>
            </svg>
            <svg className={s.icon} width="56px" height="56px">
              <use href={iconPath}></use>
            </svg>
          </div>
        )}
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
        <ul className={s.list}>{elements}</ul>
      )}
    </>
  );
};

export default IncomeByCategories;
