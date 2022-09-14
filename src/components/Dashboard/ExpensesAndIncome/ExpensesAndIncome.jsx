import { Button } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import {
  useAddExpenseMutation,
  useAddIncomeMutation,
  useGetExpenseCategoriesQuery,
  useGetIncomeCategoriesQuery,
} from 'redux/transaction/transactionOperations';
import s from './ExpensesAndIncome.module.css';
import { TransactionDetails } from '../TransactionDetails/TransactionDetails';
import { ReactComponent as BackArrow } from 'assets/svg/back-arrow.svg';
import { ReactComponent as Calculator } from 'assets/svg/calculator.svg';

export const ExpensesAndIncome = () => {
  const token = useSelector(state => state.auth.accessToken);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [addExpense] = useAddExpenseMutation();
  const [addIncome] = useAddIncomeMutation();
  const location = useLocation();
  const { data: expenseCategories } = useGetExpenseCategoriesQuery({
    skip: token,
  });
  const { data: incomeCategories } = useGetIncomeCategoriesQuery({
    skip: token,
  });
  let currentDate = new Date().toJSON().slice(0, 10);

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (location.pathname === '/transactions/expenses') {
      addExpense({
        description: description,
        amount: price,
        date: currentDate,
        category: category,
      });
    } else {
      addIncome({
        description: description,
        amount: price,
        date: currentDate,
        category: category,
      });
    }
    setDescription('');
    setCategory('');
    setPrice('');
  };

  const handleReset = () => {
    setDescription('');
    setCategory('');
    setPrice('');
  };

  return (
    <div className={s.expenses}>
      <NavLink to="/">
        <BackArrow
          style={{
            width: '32',
            height: '24',
          }}
        />
      </NavLink>
      <form className={s.form}>
        <input
          className={s.input}
          name="description"
          value={description}
          type="text"
          onChange={handleChange}
          placeholder="Product description" 
        />
        <select
          className={s.select}
          placeholder="Product category"
          name="category"
          value={category}
          autoComplete="off"
          autoCorrect="off"
          onChange={handleChange}
        >
          <option defaultValue>Product category</option>
          {location.pathname === '/transactions/expenses'
            ? expenseCategories &&
              expenseCategories.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))
            : incomeCategories &&
              incomeCategories.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
        </select>
        <div className={s.wrapper_input_cal}>
        <input
          className={s.price}
          name="price"
          value={price}
          placeholder="00.00 UAH"
          onChange={handleChange}
        />
        <div className={s.background_icon}>
        <Calculator className={s.icon_cal} />
        </div>
        </div>
        <div>
          <Button className={s.btn} type="submit" onClick={handleSubmit}>
            Input
          </Button>
          <Button className={s.btn} type="button" onClick={handleReset}>
            Clear
          </Button>
        </div>
      </form>
      <TransactionDetails />
    </div>
  );
};
