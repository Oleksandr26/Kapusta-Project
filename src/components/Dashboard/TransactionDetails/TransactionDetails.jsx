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

  const getExpense = useGetExpenseQuery({
    skip: token,
  });

  const getIncome = useGetIncomeQuery({
    skip: token,
  });

  const expenceArr = getExpense.data && [...getExpense.data.expenses].reverse();
  const incomeArr = getIncome.data && [...getIncome.data.incomes].reverse();

  const normalize = amount => {
    if (location.pathname === '/transactions/expenses') {
      const amountNormalizer =
        '- ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';
      return amountNormalizer;
    } else {
      const amountNormalizer =
        '+ ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ') + ' грн.';
      return amountNormalizer;
    }
  };

  return (
    <div className={s.scrollTable}>
      <table className={s.x}>
        <thead className={s.tableHead}>
          <tr>
            <th className={s.tableTheadEmpty}></th>
            <th className={s.table__head}>DATE</th>
            <th className={s.table__head}>DESCRIPTION</th>
            <th className={s.table__head}>CATEGORY</th>
            <th className={s.table__head}>SUM</th>
            <th className={s.table__delete}></th>
          </tr>
        </thead>
        <tbody>
          {location.pathname === '/transactions/expenses'
            ? expenceArr &&
              expenceArr.map(item => (
                <tr className={s.tableBodyTR} key={item._id}>
                  <td className={s.tableTheadEmpty}></td>
                  <td className={s.table__head}>{item.date}</td>
                  <td className={s.table__head}>{item.description}</td>
                  <td className={s.table__head}>{item.category}</td>
                  <td className={s.table__head}>{normalize(item.amount)}</td>
                  <td className={s.table__head}>
                    <button
                      onClick={() => deleteTransaction(item._id)}
                      type="button"
                      className={s.btnDelete}
                    ></button>
                  </td>
                </tr>
              ))
            : incomeArr &&
              incomeArr.map(item => (
                <tr className={s.tableBodyTR} key={item._id}>
                  <td className={s.tableTheadEmpty}></td>
                  <td className={s.table__head}>{item.date}</td>
                  <td className={s.table__head}>{item.description}</td>
                  <td className={s.table__head}>{item.category}</td>
                  <td className={s.table__head}>{normalize(item.amount)}</td>
                  <td className={s.table__head}>
                    <button
                      onClick={() => deleteTransaction(item._id)}
                      type="button"
                      className={s.btnDelete}
                    ></button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};
