import s from './TransactionDetailsMobile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDeleteTransactionMutation } from 'redux/transaction/transactionOperations';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { ConfirmActionModal } from 'components/Modal/QuestionModal';

export const TransactionDetailsMobile = () => {
  const [modal, setModal] = useState(false);
  const [transactionOnDeleteId, setTransactionOnDeleteId] = useState('');
  const [totalArr, setTotalArr] = useState([]);
  const dispatch = useDispatch();
  const getUserTransaction = useSelector(
    state => state.auth.userData.transactions
  );
  const [deleteTransaction] = useDeleteTransactionMutation();

  useEffect(() => {
    setTotalArr([...getUserTransaction].reverse());
  }, [getUserTransaction]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleDeleteTransaction = async id => {
    setModal(false);
    try {
      await deleteTransaction(id).unwrap();
      setTotalArr(totalArr.filter(item => item._id !== id));
    } catch (error) {
      return error.message;
    }
  };

  const amountNormalizer = (sign, amount) => {
    return (
      `${sign}` +
      amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') +
      ' грн.'
    );
  };
  const onDelete = id => {
    setModal(true);
    setTransactionOnDeleteId(id);
  };
  const elements = totalArr
    // .slice(-3)
    // .reverse()
    .map(item => {
      const transactionsType =
        item.category === 'З/П' || item.category === 'Доп. доход';
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
            {transactionsType ? (
              <p className={s.plus}>{amountNormalizer('+', item.amount)}</p>
            ) : (
              <p className={s.minus}>{amountNormalizer('-', item.amount)}</p>
            )}
            <button
              onClick={() => onDelete(item._id)}
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
      {modal && (
        <ConfirmActionModal
          title="Are you sure?"
          onClickYes={() => handleDeleteTransaction(transactionOnDeleteId)}
          onClickNo={() => setModal(false)}
        />
      )}
    </div>
  );
};
