import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const isToken = useSelector(state => state.auth.accessToken);
  return <>{isToken ? <Navigate to="/transactions" /> : <Outlet />}</>;
};

export default PublicRoute;
