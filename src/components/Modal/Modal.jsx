import s from './Modal.module.css';

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <p>Hello! To get started, enter the current balance of your account!</p>
      <p className={s.text}>You can't spend money until you have it :)</p>
    </div>
  );
};

export default Modal;
