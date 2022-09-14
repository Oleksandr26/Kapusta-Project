import s from './TransactionDetailsMobile.module.css';
import { useSelector } from 'react-redux';
import { useDeleteTransactionMutation } from 'redux/transaction/transactionOperations';
import { useState } from 'react';
import { useEffect } from 'react';

export const TransactionDetailsMobile = () => {
  const [totalArr, setTotalArr] = useState([]);
  const getUserTransaction = useSelector(
    state => state.auth.userData.transactions
  );
  console.log('getUserTransaction: ', getUserTransaction);

  const [deleteTransaction] = useDeleteTransactionMutation();

  useEffect(() => {
    setTotalArr(getUserTransaction);
  }, [getUserTransaction]);

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
            {/* <p className={s.divSumAndButtonFlex__sum}>{item.amount} грн.</p> */}
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
