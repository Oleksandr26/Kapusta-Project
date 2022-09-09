import s from './UserForm.module.css';

import { useDispatch } from 'react-redux';
import { login, logout, register } from 'redux/auth/auth-operations';

const UserForm = () => {
  const dispatch = useDispatch();

  const submitData = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const newUser = {
      email: name.value,
      password: number.value,
    };

    dispatch(login(newUser));
  };

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <form className={s.form} onSubmit={submitData}>
      <label className={s.label}>
        <span className={s.label__text}>Name</span>
        <input
          className={s.input}
          type="text"
          // value={contact.name}
          // onChange={saveData}
          name="name"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.label__text}>Number</span>
        <input
          className={s.input}
          type="tel"
          // value={contact.number}
          // onChange={saveData}
          name="number"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Register
      </button>
      <button type="button" onClick={logOut}>
        Log Out
      </button>
    </form>
  );
};

export default UserForm;
