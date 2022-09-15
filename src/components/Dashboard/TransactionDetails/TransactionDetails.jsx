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

  const summStyle =
    location.pathname === '/transactions/expenses' ? s.minus : s.plus;

  return (
    <>
      <div className={s.scrollTable}>
        <table>
          <thead className={s.tableHead}>
            <tr>
              <th className={s.table__head__empty}></th>
              <th className={s.table__head__date}>DATE</th>
              <th className={s.table__head__text}>DESCRIPTION</th>
              <th className={s.table__head__category}>CATEGORY</th>
              <th className={s.table__head__sum}>SUM</th>
              <th className={s.table__head__delete}></th>
            </tr>
          </thead>
        </table>
        <div className={s.scrollTableBody}>
          <table>
            <tbody>
              {reportArr.map(item => (
                <tr className={s.body} key={item._id}>
                  <td className={s.body__empty}></td>
                  <td className={s.body__date}>{item.date}</td>
                  <td className={s.body__description}>{item.description}</td>
                  <td className={s.body__category}>{item.category}</td>
                  <td className={summStyle}>{normalize(item.amount)}</td>
                  <td className={s.body__delete}>
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
      </div>
    </>
  );
};
