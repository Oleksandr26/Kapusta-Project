import s from './TransactionDetailsMobile.module.css';
import { useSelector } from 'react-redux';
import { useGetUserQuery } from 'redux/user/userOperations';
import { useDeleteTransactionMutation } from 'redux/transaction/transactionOperations';

export const TransactionDetailsMobile = () => {
  const token = useSelector(state => state.auth.accessToken);
  const [deleteTransaction, deleteTransationData] =
    useDeleteTransactionMutation();
  const getTransactions = useGetUserQuery({
    skip: token,
  });
  // const totalArr = [...getTransactions.data.transactions.slice(-3)].reverse();

  return (
    <>
      <div className={s.tableContainer}>
        <ul className={s.list}>
          {/* {totalArr.map(item => (
            <li className={s.divTextFlex} key={item._id}>
              <h2 className={s.title}>{item.description}</h2>
              <p className={s.divTextFlex__text}>{item.date}</p>
              <p className={s.divTextFlex__text}>{item.category}</p>
              <div className={s.divSumAndButtonFlex}>
                <p className={s.divSumAndButtonFlex__sum}>{item.amount} грн.</p>
                <button onClick={() => deleteTransaction(item._id)} type="button" className={s.btnDelete}></button>
              </div>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
};
