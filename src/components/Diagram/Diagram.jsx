import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
  useGetExpenseCategoriesQuery,
  useGetExpenseQuery,
} from 'redux/transaction/transactionOperations';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Diagram() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const expenses = useGetExpenseQuery().currentData?.expenses;

  // const x = expenses?.forEach(e => e.reduce((obj, acc) => obj.total + acc, 0));
  // .reduce((total, expense) => {
  //   console.log(expense);
  //   return total + expense.amount;
  // });
  // console.log(x);
  // const x = expenses?.forEach(
  //   obj =>
  //     (obj.total = obj.expenses?.reduce(
  //       (sum, expense) => sum + expense.amount,
  //       0
  //     ))
  // );
  // console.log(x);
  // const x = expenses?.forEach(obj => (obj.total = obj.expense.reduce(total, description) => return total + ));

  const labels = expenses
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);

  const data = {
    labels,
    datasets: [
      {
        // data: categorySum,
        backgroundColor: ['blue, tomato, tomato'],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
