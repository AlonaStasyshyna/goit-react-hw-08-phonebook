import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import {
  CustomizedUserMenu,
  CustomizedGreeting,
  CustomizedLogoutIcon,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <CustomizedUserMenu>
      <CustomizedGreeting>Glad to see you, {name}!</CustomizedGreeting>
      <IconButton
        size="small"
        edge="start"
        color="inherit"
        aria-label="home"
        onClick={() => dispatch(logout())}
      >
        <CustomizedLogoutIcon />
      </IconButton>
    </CustomizedUserMenu>
  );
};
