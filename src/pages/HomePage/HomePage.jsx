import s from './HomePage.module.css';
import Alkohol from 'assets/svg/alkohol.svg';
import React from 'react';
import UserForm from 'components/UserForm/UserForm';
import {
  useGetIncomeCategoriesQuery,
  useGetExpenseCategoriesQuery,
  useGetPeriodDataQuery,
  useGetIncomeQuery,
  useGetExpenseQuery,
  useDeleteTransactionMutation,
  useAddExpenseMutation,
  useAddIncomeMutation,
} from 'redux/transaction/transactionOperations';
import {
  useGetUserQuery,
  useUpdateBalanceMutation,
} from 'redux/user/userOperations';
import { useState } from 'react';
import Balance from 'components/Balance/Balance';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [expense, setExpense] = useState({
    description: 'Income description',
    amount: 100,
    date: '2020-12-31',
    category: 'Доп. доход',
  });
  // const { data, isLoading, error } = useGetIncomeCategoriesQuery();
  // const {data, isLoading, error} = useGetExpenseCategoriesQuery();
  // const {data, isLoading, error} = useGetPeriodDataQuery('2022-06');
  // const {data, isLoading, error} = useGetIncomeQuery();
  // const {data, isLoading, error} = useGetExpenseQuery();
  // const { data, isLoading, error } = useGetUserQuery();

  const [deleteTransaction, data1] = useDeleteTransactionMutation();
  const [addExpense, data2] = useAddExpenseMutation();
  const [addIncome, data3] = useAddIncomeMutation();
  const [updateBalance, data4] = useUpdateBalanceMutation();

  return (
    <div className={s.container}>
      <h2>HomePage</h2>
      <div>
        <Balance />
        <Link>
          Reports <Alkohol size="15px" />
        </Link>
      </div>
      <UserForm />
      <div className={s.block}>
        <button
          className={s.item}
          type="button"
          onClick={() => deleteTransaction({ newBalance: 111 })}
        >
          detele transaction
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() => addExpense({ newBalance: 111 })}
        >
          add expense
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() => addIncome({ newBalance: 111 })}
        >
          Add income
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() => updateBalance({ newBalance: 111 })}
        >
          update Balance
        </button>
      </div>
    </div>
  );
};

export default HomePage;
