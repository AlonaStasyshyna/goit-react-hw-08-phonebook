import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? <Navigate to="/" /> : children;
};
