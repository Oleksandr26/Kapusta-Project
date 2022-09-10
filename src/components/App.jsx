import 'modern-normalize/modern-normalize.css';
// import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';

import { Container, Box } from '@mui/system';

export const App = () => {
  return (
    <div>
      <h2>Kapu$ta smart finance</h2>
      <Header />
      <Container maxWidth="xl">
        <Box xl={{ height: '100vh' }}>
          <HomePage />
          <ReportsPage />
        </Box>
      </Container>
    </div>
  );
};

<Container maxWidth="sm">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>;
