import s from './TransactionDetailsMobile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteTransactionMutation } from 'redux/transaction/transactionOperations';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';

export const TransactionDetailsMobile = () => {
  const [totalArr, setTotalArr] = useState([]);
  const dispatch = useDispatch();
  const getUserTransaction = useSelector(
    state => state.auth.userData.transactions
  );
  const [deleteTransaction] = useDeleteTransactionMutation();

  useEffect(() => {
    setTotalArr(getUserTransaction);
  }, [getUserTransaction]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleDeleteTransaction = id => {
    deleteTransaction(id);
    setTotalArr(totalArr.filter(item => item._id !== id));
  };

  const amountNormalizer = (sign, amount) => {
    return (
      `${sign}` +
      amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') +
      ' грн.'
    );
  };

  const elements = totalArr
    .slice(-3)
    .reverse()
    .map(item => {
      const test = item.category === 'З/П' || item.category === 'Доп. доход';
      return (
        <li className={s.list__item} key={item._id}>
          <div className={s.item__container}>
            <h2 className={s.title}>{item.description}</h2>
            <div className={s.text__container}>
              <p className={s.item__text}>{item.date}</p>
              <p className={s.item__text}>{item.category}</p>
            </div>
          </div>
          <div className={s.divSumAndButtonFlex}>
            {test ? (
              <p className={s.plus}>{amountNormalizer('+', item.amount)}</p>
            ) : (
              <p className={s.minus}>{amountNormalizer('-', item.amount)}</p>
            )}
            <button
              onClick={() => handleDeleteTransaction(item._id)}
              type="button"
              className={s.btnDelete}
            ></button>
          </div>
        </li>
      );
    });
  return (
    <div className={s.tableContainer}>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
};
