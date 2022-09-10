import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import s from './Expenses.module.css';
import {
  useAddExpenseMutation,
  useGetExpenseCategoriesQuery,
} from 'redux/transaction/transactionOperations';

export const Expenses = () => {
  const quryToken = useSelector(state => state.auth.token);
  const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [addExpense, addExpenseData] = useAddExpenseMutation();
  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: quryToken,
  });
  const onHandleInput = e => {
    e.preventDefault();
    console.log('e: ', e.target);
  };

  const saveData = event => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Button>back</Button>
      <form onSubmit={onHandleInput}>
        <input type="text" onChange={saveData} />
        <select>
          {expenseCategories.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input placeholder="00.00 UAH" />
        <button type="submit">Input</button>
      </form>
      <Button>Clear</Button>
    </div>
  );
};
