import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  useGetExpenseQuery,
  useGetIncomeQuery,
  useDeleteTransactionMutation,
} from 'redux/transaction/transactionOperations';
import s from './TransactionDetails.module.css';

export const TransactionDetails = () => {
  const location = useLocation();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const token = useSelector(state => state.auth.accessToken);
  const getIncome = useGetIncomeQuery({
    skip: token,
  });
  const incomeArr = [...getIncome.data.incomes].reverse();

  const getExpense = useGetExpenseQuery({
    skip: token,
  });
  const expenceArr = [...getExpense.data.expenses].reverse();

  return (
    <div className={s.scrollTable}>
      <table>
        <thead className={s.tableHead}>
          <tr>
            {/* <th className={s.tableTheadEmpty}></th> */}
            <th className={s.tableTheadDate}>DATE</th>
            <th className={s.tableTheadDescription}>DESCRIPTION</th>
            <th className={s.tableTheadCategory}>CATEGORY</th>
            <th className={s.tableTheadSum}>SUM</th>
            <th className={s.tableTheadDelete}></th>
          </tr>
        </thead>
      </table>
      <div className={s.scrollTableBody}>
        <table>
          <tbody>
            {location.pathname === '/expenses'
              ? expenceArr.map(item => (
                  <tr className={s.tableBodyTR} key={item._id}>
                    <td className={s.tableBodyDate}>{item.date}</td>
                    <td className={s.tableBodyDescription}>
                      {item.description}
                    </td>
                    <td className={s.tableBodyCategory}>{item.category}</td>
                    <td className={s.tableBodySum}>{item.amount}</td>
                    <td className={s.tableBodyDelete}>
                      <button
                        onClick={() => deleteTransaction(item._id)}
                        type="button"
                        className={s.btnDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : incomeArr.map(item => (
                  <tr className={s.tableBodyTR} key={item._id}>
                    <td className={s.tableBodyDate}>{item.date}</td>
                    <td className={s.tableBodyDescription}>
                      {item.description}
                    </td>
                    <td className={s.tableBodyCategory}>{item.category}</td>
                    <td className={s.tableBodySum}>{item.amount}</td>
                    <td className={s.tableBodyDelete}>
                      <button
                        onClick={() => deleteTransaction(item._id)}
                        type="button"
                        className={s.btnDelete}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
