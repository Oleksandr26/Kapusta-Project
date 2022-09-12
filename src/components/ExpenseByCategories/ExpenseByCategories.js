import s from './ExpenseByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/sprite.svg';
import { useSelector } from 'react-redux';
import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';
import { NavLink } from 'react-router-dom';

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
    const getLinkClassName = props => {
      const { isActive } = props;
      return isActive ? s.activeLink : s.link;
    };

    return (
      <li className={s.item} key={nanoid()}>
        <NavLink
          to={name}
          className={getLinkClassName}
          onClick={handleSetCategory}
        >
          <p className={s.info}>{amountNormalizer}</p>
          <svg className={s.icon} width="56px" height="56px">
            <use href={iconPath}></use>
          </svg>
          <p className={s.info}>{name}</p>
        </NavLink>
      </li>
    );
  });
  return <ul className={s.list}>{elements}</ul>;
};

export default ExpenseByCategories;
