import { CustomizedBreadcrumbs, CustomizedLink } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <CustomizedBreadcrumbs>
      <CustomizedLink to="register">Sign up</CustomizedLink>
      <CustomizedLink to="login">Log in</CustomizedLink>
    </CustomizedBreadcrumbs>
  );
};
