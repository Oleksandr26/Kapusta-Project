import { useDispatch } from 'react-redux';
import { handleLogin, handleRegistration } from 'redux/auth/auth-operations';
import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg';
import { useState } from 'react';

// import { GoogleLogin } from '@moeindana/google-oauth';
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

  const onLoginClick = e => {
    e.preventDefault();
    dispatch(handleLogin({ email, password }));
    setEmail('');
    setPassword('');
  };
  const onRegisterClick = e => {
    e.preventDefault();
    dispatch(handleRegistration({ email, password }));
    setEmail('');
    setPassword('');
  };
  // <GoogleLogin
  // onSuccess={response => {
  //   console.log(response);
  // }}
  // onError={() => {
  //   console.log('Login Failed');
  // }}/>

  return (
    <div className={` ${s.backgraund}`}>
      <p className={s.text}>You can log in with your Google Account:</p>
      {/* <GoogleLogin /> */}
      <button
        className={s.auth_button}
        onClick={e => {
          e.preventDefault();
          setEmail('');
        }}
      >
        <GoogleIcon className={s.googleIcon} />
        <span className={s.span}>Google</span>
      </button>
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
            onClick={e => onLoginClick(e)}
          >
            Login
          </button>
          <button
            className={s.button}
            type="submit"
            name="register"
            onClick={e => onRegisterClick(e)}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
