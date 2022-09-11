import s from './Modal.module.css';

const Modal = ({ handleToggle, active, setActive }) => {
  return (
    <div
      className={`${active ? s.active : s.modal} `}
      onClick={e => {
        if (e.target === e.currentTarget) {
          handleToggle();
        }
      }}
    >
      <p>Hello! To get started, enter the current balance of your account!</p>
      <p className={s.text}>You can't spend money until you have it :)</p>
    </div>
  );
};

export default Modal;
