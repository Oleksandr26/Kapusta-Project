import s from './IncomeByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/sprite.svg';
import { useSelector } from 'react-redux';
import {
  useGetIncomeCategoriesQuery,
  useGetIncomeQuery,
} from 'redux/transaction/transactionOperations';

const IncomeByCategories = ({
  dateTransactionFilter,
  setCategory,
  category,
}) => {
  const isLogin = useSelector(store => store.auth.accessToken);
  const { data: incomeCategories } = useGetIncomeCategoriesQuery({
    skip: isLogin,
  });
  const { data = [] } = useGetIncomeQuery({ skip: isLogin });
  const { incomes = [] } = data;

  const result = incomeCategories?.map(item => ({
    name: item,
    amount: dateTransactionFilter(incomes).reduce((acc, cost) => {
      return item === cost.category ? acc + cost.amount : acc;
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

  return <ul className={s.list}>{elements}</ul>;
};

export default IncomeByCategories;
