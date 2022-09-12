export const handleChosenCategoryUniqueLabels = (arr, category) => {
  return arr
    ?.filter(item => item.category === category)
    ?.map(({ description }) => description)
    .filter((el, index, array) => array.indexOf(el) === index);
};

const diagramForAllTime = arr => {
  arr?.map(item => ({
    descriptionName: item,
    amount: arr.reduce((acc, transaction) => {
      return item === transaction.description ? acc + transaction.amount : acc;
    }, 0),
  }));
};

// const diagramForAllTime = chosenCategoryUniqueLabels?.map(item => ({
//   descriptionName: item,
// amount: expenses.reduce((acc, transaction) => {
//   return item === transaction.description ? acc + transaction.amount : acc;
// }, 0),
// }));

// console.log(diagramForAllTime(chosenCategoriesUniqueLabels));

// const chosenCategoriesUniqueLabels = MONTH_CASHFLOW?.filter(
//   item => item.category === category
// );
//   ?.map(({ description }) => description)
//   .filter((el, index, array) => array.indexOf(el) === index);
