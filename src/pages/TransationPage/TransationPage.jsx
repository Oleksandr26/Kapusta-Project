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
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {updateBalance} from "../../redux/auth/auth-slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const [addExpense, addExpenseResult] = useAddExpenseMutation();
  const [addIncome, addIncomeResult] = useAddIncomeMutation();

  useEffect(() => {
    if(addIncomeResult.isSuccess){
      dispatch(updateBalance(addIncomeResult.data))
    }
  }, [dispatch, addIncomeResult])

  useEffect(() => {
    if(addExpenseResult.isSuccess){
      dispatch(updateBalance(addExpenseResult.data))
    }
  }, [dispatch, addExpenseResult])

  return (
    <div className={s.container}>
      <h2>TransactionPage</h2>

      <div className={s.wrap}>
        <Link className={s.reportsBtn} to="/reports">
          <span className={s.reports}>Reports</span>
          <BarChart className={s.icon} />
        </Link>
        <Balance />
      </div>

      <Dashboard />

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
      <Outlet />
    </div>
  );
};

export default HomePage;
