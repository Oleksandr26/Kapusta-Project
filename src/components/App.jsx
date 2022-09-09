import 'modern-normalize/modern-normalize.css';
import UserForm from './UserForm/UserForm';
import {useGetIncomeCategoriesQuery, useGetExpenseCategoriesQuery} from 'redux/transaction/transactionOperations';

export const App = () => {
  // const {data, isLoading, error} = useGetIncomeCategoriesQuery();
  const {data, isLoading, error} = useGetExpenseCategoriesQuery();
  console.log(data)

  return (
    <div>
      <UserForm />
    </div>
  );
};
