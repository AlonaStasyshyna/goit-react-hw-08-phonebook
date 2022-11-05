import { Breadcrumbs, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomizedBreadcrumbs = styled(Breadcrumbs)`
  color: white;
`;

export const CustomizedLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
