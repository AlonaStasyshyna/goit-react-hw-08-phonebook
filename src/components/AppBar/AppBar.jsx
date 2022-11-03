import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Navigation />
      {token ? <UserMenu /> : <AuthNavigation />}
    </>
  );
};
