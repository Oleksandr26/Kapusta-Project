import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ReactComponent as LogOut } from '../../../assets/svg/logout.svg';
import { QuestionModal } from '../../../components/Modal/QuestionModal';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const [modal, setModal] = useState(null);
  const email = useSelector(state => state.auth.userData.email);

  const closeModal = data => {
    setModal(data);
  };

  return (
    email && (
      <nav className={s.nav}>
        <span className={s.name}>{email[0].toUpperCase()}</span>
        <p className={s.full_name}>{email}</p>
        <p className={s.exit} onClick={() => closeModal(true)}>
          Exit
        </p>
        <LogOut className={s.icon_logOut} onClick={() => closeModal(true)} />
        {modal && <QuestionModal className={s.modal} closeModal={closeModal} />}
      </nav>
    )

    //    googleUser && <nav className={s.nav}>
    //    <span className={s.name}>{googleUser[0].toUpperCase()}</span>
    //    <LogOut className={s.icon_logOut} onClick={exit}/>
    //  </nav>
  );
};

export default UserMenu;
