import { List, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';

export const CustomizedNavigationList = styled(List)`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CustomizedHomeIcon = styled(HomeIcon)`
  color: white;
`;

export const LinkNav = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
