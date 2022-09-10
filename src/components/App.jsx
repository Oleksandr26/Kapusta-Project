import 'modern-normalize/modern-normalize.css';
// import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import TransationPage from 'pages/TransationPage/TransationPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';

import Dashboard from './Dashboard/Dashboard';

import AuthPage from 'pages/AuthPage/AuthPage';

import { Container, Box } from '@mui/system';
import HomePage from 'pages/TransationPage/TransationPage';

export const App = () => {
  return (
    <div>
      <Header />

      {/* <AuthPage />
      <ReportsPage /> */}
      <Dashboard />

      <Container maxWidth="xl">
        <Box xl={{ height: '100vh' }}>
          <AuthPage />
          <TransationPage />
          <ReportsPage />
        </Box>
      </Container>
    </div>
  );
};

<Container maxWidth="sm">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>;
