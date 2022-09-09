import 'modern-normalize/modern-normalize.css';
import UserForm from './UserForm/UserForm';
import {useGetIncomeCategoriesQuery, useGetExpenseCategoriesQuery, useGetPeriodDataQuery, useGetIncomeQuery, useGetExpenseQuery} from 'redux/transaction/transactionOperations';

export const App = () => {
  // const {data, isLoading, error} = useGetIncomeCategoriesQuery();
  // const {data, isLoading, error} = useGetExpenseCategoriesQuery();
  // const {data, isLoading, error} = useGetPeriodDataQuery('2022-06');
  // const {data, isLoading, error} = useGetIncomeQuery();
  // const {data, isLoading, error} = useGetExpenseQuery();
  // console.log(data)

  return (
    <div>
      <UserForm />
    </div>
  );
};
