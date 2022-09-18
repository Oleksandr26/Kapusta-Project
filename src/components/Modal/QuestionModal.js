import s from './QuestionModal.module.css';

export const ConfirmActionModal = ({ title, onClickYes, onClickNo }) => {
  return (
    <div className={s.modal}>
      <p className={s.modal_text}>{title}</p>
      <ul className={s.modal_wrapper_button}>
        <li className={s.modal_item}>
          <button
            className={s.modal_button}
            type="button"
            onClick={() => onClickYes()}
          >
            Yes
          </button>
        </li>
        <li className={s.modal_item}>
          <button
            className={s.modal_button}
            type="button"
            onClick={() => onClickNo()}
          >
            No
          </button>
        </li>
      </ul>
    </div>
  );
};
