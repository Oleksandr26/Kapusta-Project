import s from './TransactionDetailsMobile.module.css';
import { useDispatch } from 'react-redux';
import { useDeleteTransactionMutation } from 'redux/transaction/transactionOperations';
// import { currentUser } from 'helpers/auth';
import { useState } from 'react';
import { getCurrentUser } from 'redux/auth/auth-operations';
import { useEffect } from 'react';

export const TransactionDetailsMobile = () => {
  const [totalArr, setTotalArr] = useState([]);
  // const token = useSelector(state => state.auth.accessToken);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const dispatch = useDispatch();
  // const getUserTransaction = getCurrentUser;
  useEffect(() => {
    const getUserTransaction = dispatch(getCurrentUser());
    getUserTransaction.then(data => {
      const arr = [...data.payload.transactions].slice(-3).reverse();
      setTotalArr(arr);
    });
  }, [dispatch]);
  // const getUserTransaction = currentUser();
  // getUserTransaction.then(data => {
  //   setTotalArr([...data.transactions]);
  // });const amountNormalizer ='- ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';
  return (
    <>
      <div className={s.tableContainer}>
        <ul className={s.list}>
          {totalArr.map(item => (
            <li className={s.list__item} key={item._id}>
              <div className={s.item__container}>
                <h2 className={s.title}>{item.description}</h2>
                <div className={s.text__container}>
                  <p className={s.item__text}>{item.date}</p>
                  <p className={s.item__text}>{item.category}</p>
                </div>
              </div>
              <div className={s.divSumAndButtonFlex}>
                <p className={s.divSumAndButtonFlex__sum}>{item.amount} грн.</p>
                <button
                  onClick={() => deleteTransaction(item._id)}
                  type="button"
                  className={s.btnDelete}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
