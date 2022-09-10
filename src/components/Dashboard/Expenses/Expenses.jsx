import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {useAddExpenseMutation, useGetExpenseCategoriesQuery} from 'redux/transaction/transactionOperations';
import s from './Expenses.module.css';

export const Expenses = () => {
  const token = useSelector(state => state.auth.accessToken);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [addExpense, addExpenseData] = useAddExpenseMutation();
  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: token,
  });

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name){
      case "description":
        setDescription(value)
        break;
      case "price":
        setPrice(value)
        break;
      default:
        return;
    }
  };

  return (
    <div className={s.expenses}>
      <Button>back</Button>
      <form className={s.form}>
        <input name="description" value={description} type="text" onChange={handleChange} placeholder="Product description"/>
        <select placeholder="Product category" value={category} autoComplete="off" autoCorrect="off">
          <option defaultValue>Product category</option>
          {expenseCategories && expenseCategories.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <input name="price" value={price} placeholder="00.00 UAH" onChange={handleChange}/>
        <div>
          <Button type="submit">Input</Button>
          <Button type="button">Clear</Button>
        </div>
      </form>
    </div>
  );
};
