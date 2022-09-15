import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Spinner from 'components/Spinner/Spinner';

const AuthPage = lazy(() => import('pages/AuthPage/AuthPage'));
const TransactionsPage = lazy(() =>
  import('pages/TransactionsPage/TransactionsPage')
);
const ReportsPage = lazy(() => import('pages/ReportsPage/ReportsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const PagesRoutes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<AuthPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/transactions/*" element={<TransactionsPage />} />
          <Route path="/reports/*" element={<ReportsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
