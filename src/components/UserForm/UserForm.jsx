import s from './UserForm.module.css';

import { useDispatch } from 'react-redux';
import { login, logout /*,register*/ } from 'redux/auth/auth-operations';

const UserForm = () => {
  const dispatch = useDispatch();

  const submitData = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const newUser = {
      email: email.value,
      password: password.value,
    };

    dispatch(login(newUser));
  };

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <form className={s.form} onSubmit={submitData}>
      <label className={s.label}>
        <span className={s.label__text}>Email</span>
        <input
          className={s.input}
          type="email"
          // value={contact.name}
          // onChange={saveData}
          name="email"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.label__text}>Password</span>
        <input
          className={s.input}
          type="password"
          // value={contact.number}
          // onChange={saveData}
          name="password"
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
