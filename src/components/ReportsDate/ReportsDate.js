import s from './ReportsDate.module.css';
import { useGetPeriodDataQuery } from 'redux/transaction/transactionOperations';

export default function ReportsDate({ date }) {
  const realDate = Date.parse(date);
  console.log('realDate: ', realDate);
  const test = new Date(realDate);
  console.log('test: ', test);

  return (
    <div>
      <p className={s.text}>Current period</p>
      <p> {realDate}</p>
    </div>
  );
}
