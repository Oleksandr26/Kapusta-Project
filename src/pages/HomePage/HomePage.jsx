import s from './HomePage.module.css';
import React from 'react';
import UserForm from 'components/UserForm/UserForm';
import {
  /*useGetIncomeCategoriesQuery,
  useGetExpenseCategoriesQuery,
  useGetPeriodDataQuery,
  useGetIncomeQuery,
  useGetExpenseQuery,*/
  useDeleteTransactionMutation,
  useAddExpenseMutation,
  useAddIncomeMutation,
} from 'redux/transaction/transactionOperations';
import {
  /*useGetUserQuery,*/
  useUpdateBalanceMutation,
} from 'redux/user/userOperations';
// import { useState } from 'react';
const HomePage = () => {
  // const [expense, setExpense] = useState({
  //   description: 'Income description',
  //   amount: 100,
  //   date: '2020-12-31',
  //   category: 'Доп. доход',
  // });
  // const { data, isLoading, error } = useGetIncomeCategoriesQuery();
  // const {data, isLoading, error} = useGetExpenseCategoriesQuery();
  // const {data, isLoading, error} = useGetPeriodDataQuery('2022-06');
  // const { data, isLoading, error } = useGetIncomeQuery();
  // console.log('data: ', data);
  // const {data, isLoading, error} = useGetExpenseQuery();
  // const { data, isLoading, error } = useGetUserQuery();

  const [deleteTransaction, deleteTransationData] =
    useDeleteTransactionMutation();
  console.log('deleteTransationData: ', deleteTransationData);
  const [addExpense, addExpenseData] = useAddExpenseMutation();
  console.log('addExpenseData: ', addExpenseData);
  const [addIncome, addIncomeData] = useAddIncomeMutation();
  console.log('addIncomeData: ', addIncomeData);
  const [updateBalance, updateBalanceData] = useUpdateBalanceMutation();
  console.log('updateBalanceData: ', updateBalanceData);

  return (
    <div className={s.container}>
      <h2>HomePage</h2>

      <UserForm />
      <div className={s.block}>
        <button
          className={s.item}
          type="button"
          onClick={() => deleteTransaction()}
        >
          detele transaction
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() =>
            addExpense({
              description: 'test5555',
              amount: 1500,
              date: '2022-09-04',
              category: 'Спорт и хобби',
            })
          }
        >
          add expense
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() =>
            addIncome({
              description: 'test123',
              amount: 22000,
              date: '2022-09-11',
              category: 'Доп. доход',
            })
          }
        >
          Add income
        </button>
        <button
          className={s.item}
          type="button"
          onClick={() => updateBalance({ newBalance: 120000 })}
        >
          update Balance
        </button>
      </div>
    </div>
  );
};

export default HomePage;
