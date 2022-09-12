import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isToken = useSelector(state => state.auth.accessToken);
  return <>{isToken ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
