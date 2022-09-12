import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
  useGetExpenseQuery,
  useGetIncomeQuery,
} from 'redux/transaction/transactionOperations';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels, ...registerables);

export function Diagram({ dateTransactionFilter, category }) {
  const options = {
    layout: {
      padding: 25,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: 'top',
        anchor: 'end',
        formatter: (_, context) => {
          return context.dataset.parsedData[context.dataIndex];
        },
      },
    },
  };

  const expenses = useGetExpenseQuery().currentData?.expenses;
  const incomes = useGetIncomeQuery().currentData?.incomes;

  const MONTH_CASHFLOW = [];

  if (incomes !== undefined && expenses !== undefined) {
    MONTH_CASHFLOW.push(...incomes, ...expenses);
  }

  const chosenCategoryUniqueLabels = MONTH_CASHFLOW?.filter(
    item => item.category === category
  )
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);

  // const diagramForAllTime = chosenCategoryUniqueLabels?.map(item => ({
  //   descriptionName: item,
  //   amount: expenses.reduce((acc, transaction) => {
  //     return item === transaction.description ? acc + transaction.amount : acc;
  //   }, 0),
  // }));

  const diagramForSelectedMonth = chosenCategoryUniqueLabels
    ?.map(item => ({
      descriptionName: item,
      amount: dateTransactionFilter(MONTH_CASHFLOW).reduce(
        (acc, transaction) => {
          return item === transaction.description
            ? acc + transaction.amount
            : acc;
        },
        0
      ),
    }))
    .sort(
      (firstAmount, secondAmount) => secondAmount.amount - firstAmount.amount
    )
    .filter(el => el.amount !== 0);

  const labels = diagramForSelectedMonth?.map(
    ({ descriptionName }) => descriptionName
  );

  const parsedData = diagramForSelectedMonth?.map(({ amount }) => {
    var parts = amount.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join('.') + ' ' + 'грн';
  });
  console.log('hi');

  const data = {
    labels,
    datasets: [
      {
        data: diagramForSelectedMonth?.map(({ amount }) => amount),
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 35,
        parsedData: parsedData,
        barThickness: 38,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
