import s from './ReportsDate.module.css';

import { ReactComponent as LeftArrow } from 'assets/svg/left-arrow.svg';
import { ReactComponent as RigthArrow } from 'assets/svg/right-arrow.svg';

export default function ReportsDate({ date, setDate }) {
  const userReportsDate = date
    .toLocaleString('en', {
      year: 'numeric',
      month: 'long',
    })
    .toUpperCase();

  const plusMonth = date => {
    const plusMonth = date.setMonth(date.getMonth() + 1);
    const newStoreDate = new Date(plusMonth);
    setDate(newStoreDate);
  };

  const minusMonth = date => {
    const minusMonth = date.setMonth(date.getMonth() - 1);
    const newStoreDate = new Date(minusMonth);
    setDate(newStoreDate);
  };

  return (
    <div className={s.container}>
      <p className={s.text}>Current period:</p>
      <div className={s.block}>
        <button
          type="button"
          className={s.leftBtn}
          onClick={() => minusMonth(date)}
        >
          <LeftArrow className={s.icon} />
        </button>
        <p className={s.date}> {userReportsDate}</p>
        <button
          type="button"
          className={s.rightBtn}
          onClick={() => plusMonth(date)}
        >
          <RigthArrow className={s.icon} />
        </button>
      </div>
    </div>
  );
}
