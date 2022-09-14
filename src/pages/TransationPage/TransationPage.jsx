import s from './TransationPage.module.css';
import { ReactComponent as BarChart } from 'assets/svg/bar_chart.svg';
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
// import /*useGetUserQuery,*/
// 'redux/user/userOperations';

import Balance from 'components/Balance/Balance';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateBalance } from '../../redux/auth/auth-slice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [addExpense, addExpenseResult] = useAddExpenseMutation();
  const [addIncome, addIncomeResult] = useAddIncomeMutation();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (addIncomeResult.isSuccess) {
      dispatch(updateBalance(addIncomeResult.data));
    }
  }, [dispatch, addIncomeResult]);

  useEffect(() => {
    if (addExpenseResult.isSuccess) {
      dispatch(updateBalance(addExpenseResult.data));
    }
  }, [dispatch, addExpenseResult]);

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <Link className={s.reportsBtn} to="/reports">
          <span className={s.reports}>Reports</span>
          <BarChart className={s.icon} />
        </Link>
        <Balance dateTransactions={date} />
      </div>

      <Dashboard />

      <Outlet />
    </div>
  );
};

export default HomePage;
