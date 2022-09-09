import 'modern-normalize/modern-normalize.css';
import UserForm from './UserForm/UserForm';
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
import { useState } from 'react';

export const App = () => {
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
  // const [deleteTransaction, result] = useDeleteTransactionMutation();
  // const [addExpense, data] = useAddExpenseMutation();
  const [addIncome, result] = useAddIncomeMutation();
  console.log(result);

  return (
    <div>
      <UserForm />
      <button type="button" onClick={() => addIncome(expense)}>
        delete
      </button>
    </div>
  );
};
// 631b44b1db7a810814033a0c
