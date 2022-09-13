import s from './ExpenseByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/icons.svg';
import backgroundSprite from 'assets/svg/symbols.svg';
import { useSelector } from 'react-redux';
import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';
import { NavLink } from 'react-router-dom';

const getLinkClassName = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const ExpenseByCategories = ({
  dateTransactionFilter,
  setCategory,
  category,
}) => {
  const isLogin = useSelector(store => store.auth.accessToken);
  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: isLogin,
  });
  const { data = [] } = useGetExpenseQuery({ skip: isLogin });
  const { expenses = [] } = data;

  const result = expenseCategories?.map(item => {
    return {
      name: item,
      amount: dateTransactionFilter(expenses)?.reduce((acc, transaction) => {
        return item === transaction.category ? acc + transaction.amount : acc;
      }, 0),
      id:
        dateTransactionFilter(expenses)?.find(
          expense => expense.category === item
        )?._id ?? '',
    };
  });

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
            <svg className={s.icon} width="56px" height="56px">
              <use href={iconPath}></use>
            </svg>
            <svg className={s.iconBackground} width="56px" height="56px">
              <use href={backgroundPath}></use>
            </svg>
          </NavLink>
        ) : (
          <div className={s.link}>
            <svg className={s.icon} width="56px" height="56px">
              <use href={iconPath}></use>
            </svg>
            <svg className={s.iconBackground} width="56px" height="56px">
              <use href={backgroundPath}></use>
            </svg>
          </div>
        )}
        <p className={s.info}>{name}</p>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default ExpenseByCategories;
