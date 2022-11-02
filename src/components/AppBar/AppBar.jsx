import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNavigation />
      <UserMenu />
    </>
  );
};
