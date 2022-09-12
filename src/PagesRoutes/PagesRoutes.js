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

const PagesRoutes = () => {
  return (
    <Suspense>
      <Container maxWidth="xl">
        <Box xl={{ height: '100vh' }}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<AuthPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/transactions" element={<TransationPage />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Container>
    </Suspense>
  );
};

export default PagesRoutes;