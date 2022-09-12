const DiagramConfig = {
  TabletAndDesktop: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 25,
    },
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
  },

  Mobile: {
    responsive: true,
    maintainAspectRatio: false,
    categoryPercentage: 0.8,
    barPercetage: 1,
    indexAxis: 'y',
    layout: {
      padding: {
        top: 15,
        right: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          offset: true,
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        labels: {
          name: {
            // display: 'auto',
            align: -50,
            anchor: 'start',
            formatter: (_, context) => {
              return context.dataset.category[context.dataIndex];
            },
            clip: true,
            padding: {
              bottom: 12,
            },
            textAlign: 'start',
            color: '#52555F',
            font: {
              size: 10,
              lineHeight: 1.17,
              family: 'Roboto',
              weight: 400,
            },
          },
          value: {
            display: 'auto',
            align: 'top',
            anchor: 'end',
            formatter: (_, context) => {
              return context.dataset.parsedData[context.dataIndex];
            },
            padding: {
              bottom: 10,
            },
            color: '#52555F',
            font: {
              size: 10,
              lineHeight: 1.17,
              family: 'Roboto',
              weight: 400,
            },
          },
        },
      },
    },
  },
};

export default DiagramConfig;
