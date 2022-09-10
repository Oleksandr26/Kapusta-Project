import s from './AuthPage.module.css'
import UserForm from 'components/UserForm/UserForm';

const AuthPage = () => {
  return <div className={s.backgraund_title}>
    <h2 className={s.title}>Kapu$ta <span className={s.span}>smart finance</span></h2>
    <UserForm />
  </div>;

};

export default AuthPage;
