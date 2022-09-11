import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { useGetExpenseQuery } from 'redux/transaction/transactionOperations';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels, ...registerables);

export function Diagram() {
  const options = {
    responsive: true,
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
      },
    },
  };

  const expenses = useGetExpenseQuery().currentData?.expenses;


  const labels = expenses
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);

  function categoryAmount() {
    const result = new Array(labels?.length).fill(0);
    for (let i = 0; i < labels?.length; i += 1) {
      expenses?.reduce((acc, transaction) => {
        if (transaction.description === labels[i]) {
          return (result[i] += transaction.amount);
        }
        return result[i];
      }, result[i]);
    }

    return result;
  }
  console.log('ho');

  const data = {
    labels,
    datasets: [
      {
        labels: categoryAmount(),
        data: categoryAmount(),
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 35,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
