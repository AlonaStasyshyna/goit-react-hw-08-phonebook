import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import {
  CustomizedAppBar,
  CustomizedContainer,
} from './AppBarComponent.styled';

export const AppBarComponent = () => {
  const token = useSelector(selectToken);

  return (
    <CustomizedAppBar>
      <CustomizedContainer>
        <Navigation />
        {token ? <UserMenu /> : <AuthNavigation />}
      </CustomizedContainer>
    </CustomizedAppBar>
  );
};
