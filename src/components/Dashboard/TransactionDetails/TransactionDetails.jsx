import { useEffect, useState } from 'react';
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
  const [reportArr, setReportArr] = useState([]);
  const getExpense = useGetExpenseQuery({
    skip: token,
  });

  const getIncome = useGetIncomeQuery({
    skip: token,
  });
  const expenses = getExpense?.data?.expenses;
  const incomes = getIncome?.data?.incomes;

  useEffect(() => {
    if (expenses !== undefined && incomes !== undefined) {
      location.pathname === '/transactions/expenses'
        ? setReportArr([...expenses].reverse())
        : setReportArr([...incomes].reverse());
    }
    return;
  }, [incomes, expenses, location]);

  const handleDeleteTransaction = id => {
    deleteTransaction(id);
    setReportArr(reportArr.filter(item => item._id !== id));
  };

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
            {/* <th className={s.tableTheadEmpty}></th> */}
            <th className={`${s.table__head} ${s.table_head_left}`}>DATE</th>
            <th className={s.table__head}>DESCRIPTION</th>
            <th className={s.table__head}>CATEGORY</th>
            <th className={s.table__head}>SUM</th>
            <th className={s.table__delete}></th>
          </tr>
        </thead>
        <tbody>
          {reportArr.map(item => (
            <tr className={s.tableBodyTR} key={item._id}>
              {/* <td className={s.tableTheadEmpty}></td> */}
              <td className={s.table__body}>{item.date}</td>
              <td className={s.table__body}>{item.description}</td>
              <td className={s.table__body}>{item.category}</td>
              <td className={s.table__body}>{normalize(item.amount)}</td>
              <td className={s.table__body}>
                <button
                  onClick={() => handleDeleteTransaction(item._id)}
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
