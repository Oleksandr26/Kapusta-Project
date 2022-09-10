import s from './UserForm.module.css';

import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/auth-operations';
import { useState } from 'react';

const UserForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={s.form}>
      <label className={s.label}>
        <span className={s.label__text}>Email</span>
        <input
          className={s.input}
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          required
        />
      </label>
      <label className={s.label}>
        <span className={s.label__text}>Password</span>
        <input
          className={s.input}
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />
      </label>
      <button
        className={s.button}
        type="submit"
        name="login"
        onClick={e => {
          e.preventDefault();
          dispatch(login({ email, password }));
          setEmail('');
        }}
      >
        Login
      </button>
      <button
        className={s.button}
        type="submit"
        name="register"
        onClick={e => {
          e.preventDefault();
          dispatch(register({ email, password }));
          setPassword('');
        }}
      >
        Register
      </button>
    </form>
  );
};

export default UserForm;
