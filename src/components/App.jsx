import 'modern-normalize/modern-normalize.css';
import Header from 'components/Header/Header';
import PagesRoutes from 'PagesRoutes/PagesRoutes';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { Container, Box } from '@mui/system';
// import Spinner from 'components/Spinner/Spinner';

const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
const TransationPage = lazy(() => import('pages/TransationPage/TransationPage'));
const ReportsPage = lazy(() => import('pages/ReportsPage/ReportsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const currentUser = useSelector(state => state.auth.currentUser);
  const accessToken = useSelector(state => state.auth.accessToken);
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
        autoClose={2000}
        hideProgressBar
        position="top-center"
        theme="colored"
        transition={Zoom}
      />
    </div>
  );
};

// <Container maxWidth="sm">
//   <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
// </Container>;
