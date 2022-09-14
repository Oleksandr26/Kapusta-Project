import { useDispatch } from 'react-redux';
import { handleLogout } from 'redux/auth/auth-operations';
import s from './QuestionModal.module.css';


export const QuestionModal = ({ closeModal }) => {

    const dispatch = useDispatch();
    const exit = () => {
        dispatch(handleLogout());
        closeModal(false)
    };

    const notExit = () => {
        closeModal(false)
    }

    return (
        <div className={s.modal}>
            <p className={s.modal_text}>Do you really want to leave?</p>
            <ul className={s.modal_wrapper_button}>
                <li className={s.modal_item}><button className={s.modal_button} type='button' onClick={exit}>Yes</button></li>
                <li className={s.modal_item}><button className={s.modal_button} type='button' onClick={notExit}>No</button></li>
            </ul>
        </div>
    )
}

export const SecondQuestionModal = () => {


    return (
        <div className={s.modal}>
            <p className={s.modal_text}>Are you sure?</p>
            <ul className={s.modal_wrapper_button}>
                <li className={s.modal_item}><button className={s.modal_button} type='button'>Yes</button></li>
                <li className={s.modal_item}><button className={s.modal_button} type='button'>No</button></li>
            </ul>
        </div>
    )
}
