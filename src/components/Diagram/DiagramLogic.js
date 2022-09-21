export const handleChosenCategoryUniqueLabels = (arr, category) => {
  return arr
    ?.filter(item => item.category === category)
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);
};

export const newDiagramHeight = (diagramForSelectedMonth, canvasTag) => {
  if (canvasTag !== undefined && canvasTag !== null) {
    let newHeight = '';
    let startedHeight = 60;
    const tabletAndDesktopScreen = 768;

    const totalBars = diagramForSelectedMonth?.length;

    if (totalBars > 1 && window.innerWidth < tabletAndDesktopScreen) {
      newHeight = (totalBars - 1) * 40 + startedHeight;

      canvasTag.style.height = newHeight + 'px';
    } else if (totalBars === 1 && window.innerWidth < tabletAndDesktopScreen) {
      canvasTag.style.height = 60 + 'px';
    } else {
      return;
    }
  }
};

// const diagramForAllTime = arr => {
//   arr?.map(item => ({
//     descriptionName: item,
//     amount: arr.reduce((acc, transaction) => {
//       return item === transaction.description ? acc + transaction.amount : acc;
//     }, 0),
//   }));
// };

// const diagramForAllTime = chosenCategoryUniqueLabels?.map(item => ({
//   descriptionName: item,
// amount: expenses.reduce((acc, transaction) => {
//   return item === transaction.description ? acc + transaction.amount : acc;
// }, 0),
// }));

// console.log(diagramForAllTime(chosenCategoriesUniqueLabels));
