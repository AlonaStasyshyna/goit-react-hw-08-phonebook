import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import {
  CustomizedNavigationList,
  CustomizedHomeIcon,
  LinkNav,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <CustomizedNavigationList>
        <li>
          <NavLink to="/" end>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="home"
            >
              <CustomizedHomeIcon />
            </IconButton>
          </NavLink>
        </li>
        <li>
          <LinkNav to="contacts">Contacts</LinkNav>
        </li>
      </CustomizedNavigationList>
    </nav>
  );
};
