import { InfinitySpin } from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={s.spinner}>
      <InfinitySpin width="150" color="#3f51b5" />
    </div>
  );
};

export default Spinner;
