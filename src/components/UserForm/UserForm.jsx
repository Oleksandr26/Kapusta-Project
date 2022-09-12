// import { signInWithGoogle } from '../../Firebase/app';
import { useDispatch } from 'react-redux';
import {
  handleLogin,
  handleRegistration /*handleAuthGoogle*/,
} from 'redux/auth/auth-operations';
// import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './UserForm.module.css';

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

  useEffect(() => {});

  return (
    <div className={` ${s.backgraund}`}>
      <p className={s.text}>You can log in with your Google Account:</p>
      {/* <button
        className={s.auth_button}
        onClick={e => {
          e.preventDefault();
          dispatch(handleAuthGoogle());
          setEmail('');
        }}
      >
        <GoogleIcon className={s.googleIcon} />
        <span className={s.span}>Google</span>
      </button> */}
      <div id="signInDiv"></div>
      <p className={s.text}>
        Or log in using an email and password, after registering:
      </p>
      <form className={s.form}>
        <label className={s.label}>
          <span className={s.label_text}>Email:</span>
          <input
            className={s.input}
            placeholder="your@email.com"
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            required
          />
        </label>
        <label className={s.label}>
          <span className={s.label_text}>Password:</span>
          <input
            className={s.input}
            placeholder="Password"
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
            required
          />
        </label>
        <div className={s.wrapper_button}>
          <button
            className={s.button}
            type="submit"
            name="login"
            onClick={e => {
              e.preventDefault();
              dispatch(handleLogin({ email, password }));
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
              dispatch(handleRegistration({ email, password }));
              setPassword('');
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
