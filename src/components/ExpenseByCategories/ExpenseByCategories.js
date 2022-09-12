import s from './ExpenseByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/sprite.svg';
import { useSelector } from 'react-redux';
import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';

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

  const result = expenseCategories?.map(item => ({
    name: item,
    amount: dateTransactionFilter(expenses)?.reduce((acc, transaction) => {
      return item === transaction.category ? acc + transaction.amount : acc;
    }, 0),
  }));

  const elements = result?.map(({ name, amount }) => {
    const iconPath = sprite + `#${name}`;
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
