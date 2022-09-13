import UserForm from 'components/UserForm/UserForm';
import { ReactComponent as Title } from 'assets/svg/title.svg';
import { ReactComponent as Kapusta } from 'assets/svg/kapusta.svg';
import { ReactComponent as SecondKapusta } from 'assets/svg/second_kapusta.svg';
import s from './AuthPage.module.css';

const AuthPage = () => {
  return (
    <div className={s.form_wrapper}>
      <div className={s.backgraund_title}>
        <Title className={s.title} />
        <p className={`${s.phrase} ${s.container}`}>
          smart finance <Kapusta className={s.icon} />
        </p>
      </div>
      <UserForm />
      <SecondKapusta className={s.Second_icon} />
      <SecondKapusta className={s.duble_icon} />
    </div>
  );
};

export default AuthPage;
