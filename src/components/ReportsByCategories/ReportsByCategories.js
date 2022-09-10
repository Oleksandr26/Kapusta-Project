import { useUpdateBalanceMutation } from 'redux/user/userOperations';
import s from './ReportsByCategories.module.css';
import { nanoid } from '@reduxjs/toolkit';
import sprite from 'assets/svg/sprite.svg';
import { useSelector } from 'react-redux';
import {
  useGetIncomeCategoriesQuery,
  useGetExpenseCategoriesQuery,
} from 'redux/transaction/transactionOperations';

const ReportsByCategories = () => {
  const isLogin = useSelector(store => store.auth.accessToken);
  //   const {data: incomeCategories } = useGetIncomeCategoriesQuery({skip: isLogin,});

  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: isLogin,
  });

  const elements = expenseCategories?.map(name => {
    const iconPath = sprite + `#${name}`;
    return (
      <li className={s.item} key={nanoid()}>
        <p className={s.info}>123123</p>
        <svg width="59px">
          <use className={s.icon} href={iconPath}></use>
        </svg>
        <p className={s.info}>{name}</p>
      </li>
    );
  });

  return (
    <div className={s.container}>
      <h3 className={s.title}>Expenses</h3>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
};

export default ReportsByCategories;
