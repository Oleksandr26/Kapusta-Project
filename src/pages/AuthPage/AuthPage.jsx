import s from './AuthPage.module.css'
import UserForm from 'components/UserForm/UserForm';

const AuthPage = () => {
  return <div>
    <h2 className={s.title}>Kapu$ta smart finance</h2>
    <UserForm />
  </div>;

};

export default AuthPage;
