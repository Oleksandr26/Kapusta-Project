import s from './ExpenseByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/sprite.svg';
import { useSelector } from 'react-redux';
import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';

const ExpenseByCategories = () => {
  const isLogin = useSelector(store => store.auth.accessToken);

  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: isLogin,
  });
  const { data = [] } = useGetExpenseQuery({ skip: isLogin });
  const { expenses = [] } = data;

  const result = expenseCategories?.map(item => ({
    name: item,
    amount: expenses?.reduce((acc, cost) => {
      return item === cost.category ? acc + cost.amount : acc;
    }, 0),
  }));

  const elements = result?.map(({ name, amount }) => {
    const iconPath = sprite + `#${name}`;
    return (
      <li className={s.item} key={nanoid()}>
        <p className={s.info}>{amount.toFixed(2)}</p>
        <svg className={s.icon} width="56px" height="56px">
          <use href={iconPath}></use>
        </svg>
        <p className={s.info}>{name}</p>
      </li>
    );
  });
  return (
    <>
      <h3 className={s.title}>Expenses</h3>
      <ul className={s.list}>{elements}</ul>
    </>
  );
};

export default ExpenseByCategories;
