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
import { faker } from '@faker-js/faker';

import { useSelector } from 'react-redux';

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

  // const labels = ;

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() =>
  //         faker.datatype.number({ min: 0, max: Infinity })
  //       ),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //   ],
  // };

  // return <Bar options={options} data={data} />;
}
