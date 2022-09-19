import s from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';
import { ConfirmActionModal } from '../../Modal/QuestionModal';
import { useDispatch } from 'react-redux';
import { handleLogout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const [modal, setModal] = useState(false);
  const email = useSelector(state => state.auth.userData.email);
  const dispatch = useDispatch();
  const onExit = () => {
    dispatch(handleLogout());
    setModal(false);
  };

  return (
    email && (
      <nav className={s.nav}>
        <span className={s.name}>{email[0].toUpperCase()}</span>
        <p className={s.full_name}>{email}</p>
        <p className={s.exit} onClick={() => setModal(true)}>
          Exit
        </p>
        <LogOut className={s.icon_logOut} onClick={() => setModal(true)} />
        {modal && (
          <ConfirmActionModal
            className={s.modal}
            title="Do you really want to leave?"
            onClickYes={() => onExit()}
            onClickNo={() => setModal(false)}
          />
        )}
      </nav>
    )

    //    googleUser && <nav className={s.nav}>
    //    <span className={s.name}>{googleUser[0].toUpperCase()}</span>
    //    <LogOut className={s.icon_logOut} onClick={exit}/>
    //  </nav>
  );
};

export default UserMenu;
