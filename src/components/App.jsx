import 'modern-normalize/modern-normalize.css';
import Header from 'components/Header/Header';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAccessToken, getUser } from 'redux/auth/auth-selector';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
  const currentUser = useSelector(getUser);
  const accessToken = useSelector(getAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser && accessToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, currentUser, accessToken]);

  return (
    <div>
      <Header />
      <PagesRoutes />

      <ToastContainer
        autoClose={3000}
        hideProgressBar
        position="top-center"
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};
