import s from './TransationPage.module.css';
import { ReactComponent as BarChart } from 'assets/svg/bar_chart.svg';
import React, { useState } from 'react';
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
import /*useGetUserQuery,*/
'redux/user/userOperations';

import Balance from 'components/Balance/Balance';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

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

  return (
    <div className={s.container}>
      <h2>TransationPage</h2>

      <div className={s.wrap}>
        <button
          type="button"
          className={s.reportsBtn}
          onClick={() => <Navigate to="/report" />}
        >
          <span className={s.reports}>Reports</span>
          <BarChart size="45px" className={s.icon} />
        </button>
        <Balance />
      </div>

      <Dashboard />

      {/* <UserForm /> */}
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
      </div>
    </div>
  );
};

export default HomePage;
