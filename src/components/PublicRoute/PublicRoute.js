import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccessToken, getUser } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const currentUser = useSelector(getUser);
  const accessToken = useSelector(getAccessToken);
  const correctPath =
    window.innerWidth > 767 ? '/transactions/expenses' : '/transactions';
  return (
    <>
      {currentUser && accessToken ? <Navigate to={correctPath} /> : <Outlet />}
    </>
  );
};

export default PublicRoute;
