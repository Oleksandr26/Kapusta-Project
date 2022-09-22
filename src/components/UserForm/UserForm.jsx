import { useDispatch } from 'react-redux';
import { handleLogin, handleRegistration } from 'redux/auth/auth-operations';
import { useForm } from 'react-hook-form';
import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg';
import { useGoogleLogin } from '@moeindana/google-oauth';
import s from './UserForm.module.css';
import { toast } from 'react-toastify';

const UserForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onLoginClick = data => {
    dispatch(handleLogin(data));
    reset();
  };

  const onRegisterClick = data => {
    dispatch(handleRegistration(data));
    reset();
  };

  const login = useGoogleLogin({
    onSuccess: response => {
      const userData = {
        email: response.email,
        password: response.id,
      };
      dispatch(handleRegistration(userData));
    },
    onError: () => {
      toast.error('Google authorization failed');
    },
  });

  return (
    <div className={` ${s.backgraund}`}>
      <p className={s.text}>You can log in with your Google Account:</p>
      <button className={s.auth_button} onClick={() => login()}>
        <GoogleIcon className={s.googleIcon} />
        <span className={s.span}>Google</span>
      </button>
      <p className={s.text}>Or log in using an email and password, after registering:</p>

      <form className={s.form}>
        <label className={s.label}>
          <span className={s.label_text}>
            {' '}
            {errors.email && <span className={s.error_span}>*</span>} Email:
          </span>
          <input
            className={s.input}
            placeholder="your@email.com"
            {...register('email', {
              required: 'This is a required field',
              pattern: {
                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Invalid email',
              },
            })}
          />
          <p className={s.error}>{errors?.email ? `* ${errors.email.message}` : <>&nbsp;</>}</p>
        </label>
        <label className={s.label}>
          <span className={s.label_text}>
            {' '}
            {errors.password && <span className={s.error_span}>*</span>} Password:
          </span>
          <input
            className={s.input}
            placeholder="Password"
            type="password"
            {...register('password', {
              required: 'This is a required field',
              minLength: { value: 8, message: 'Password must contain 8 or more characters' },
            })}
          />
          <p className={s.error}>
            {errors?.password ? `* ${errors.password.message}` : <>&nbsp;</>}
          </p>
        </label>
        <div className={s.wrapper_button}>
          <button
            className={s.button}
            type="button"
            name="login"
            onClick={handleSubmit(onLoginClick)}
          >
            Login
          </button>
          <button
            className={s.button}
            type="button"
            name="register"
            onClick={handleSubmit(onRegisterClick)}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
