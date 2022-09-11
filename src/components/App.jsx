import 'modern-normalize/modern-normalize.css';
// import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import TransationPage from 'pages/TransationPage/TransationPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';

import Dashboard from './Dashboard/Dashboard';
import AuthPage from 'pages/AuthPage/AuthPage';
import {Container, Box} from '@mui/system';
import {newSession} from "../redux/auth/auth-operations";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export const App = () => {
  const refreshToken = useSelector(state => state.auth.refreshToken);
  const dispatch = useDispatch()

  useEffect(() => {
    if(refreshToken){
      dispatch(newSession())
    }
  }, [dispatch])


  return (
    <div>
      <Header />

      <AuthPage />

      <Container maxWidth="xl">
        <Box xl={{ height: '100vh' }}>

          <TransationPage />
          <ReportsPage />
        </Box>
      </Container>
    </div>
  );
};


// <Container maxWidth="sm">
//   <Box sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
// </Container>;

