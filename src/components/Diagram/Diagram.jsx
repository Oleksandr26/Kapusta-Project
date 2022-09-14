import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
  useGetExpenseQuery,
  useGetIncomeQuery,
} from 'redux/transaction/transactionOperations';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import DiagramConfig from './DiagramConfig&Data';
import {
  handleChosenCategoryUniqueLabels,
  newDiagramHeight,
} from './DiagramLogic';

Chart.register(ChartDataLabels, ...registerables);

export function Diagram({ dateTransactionFilter, category }) {
  const expenses = useGetExpenseQuery().currentData?.expenses;
  const incomes = useGetIncomeQuery().currentData?.incomes;
  const MONTH_CASHFLOW = [];

  const canvasTag = document.querySelector('canvas');

  if (incomes !== undefined && expenses !== undefined) {
    MONTH_CASHFLOW.push(...incomes, ...expenses);
  }

  const chosenCategoryUniqueLabels = handleChosenCategoryUniqueLabels(
    MONTH_CASHFLOW,
    category
  );

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
    var parts = amount.toString().split(`.`);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
    // eslint-disable-next-line
    return parts.join(`.`) + ` ` + `грн`;
  });

  const TabletAndDesktopData = {
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

  const MobileData = {
    labels,
    datasets: [
      {
        data: diagramForSelectedMonth?.map(({ amount }) => amount),
        backgroundColor: ['#FF751D', '#FFDAC0', '#FFDAC0'],
        borderRadius: 35,
        parsedData: parsedData,
        barThickness: 15,
        category: labels,
      },
    ],
  };

  newDiagramHeight(diagramForSelectedMonth, canvasTag);
  return (
    <>
      {window.innerWidth > 768 ? (
        <Bar
          options={DiagramConfig.TabletAndDesktop}
          data={TabletAndDesktopData}
        />
      ) : (
        <Bar options={DiagramConfig.Mobile} data={MobileData} />
      )}
    </>
  );
}
