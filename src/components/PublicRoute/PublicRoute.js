import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccessToken, getUser } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const currentUser = useSelector(getUser);
  const accessToken = useSelector(getAccessToken);
  return (
    <>
      {currentUser && accessToken && window.innerWidth > 767 ? (
        <Navigate to="/transactions/expenses" />
      ) : (
        <Outlet />
      )}

      {currentUser && accessToken && window.innerWidth < 768 ? (
        <Navigate to="/transactions" />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PublicRoute;
