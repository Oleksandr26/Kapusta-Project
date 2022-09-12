import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAccessToken, getUser } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const currentUser = useSelector(getUser);
  const accessToken = useSelector(getAccessToken);
  return <>{currentUser && accessToken ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoute;
