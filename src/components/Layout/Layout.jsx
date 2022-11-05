import { Outlet } from 'react-router-dom';
import { AppBarComponent } from 'components/AppBarComponent/AppBarComponent';

export const Layout = () => {
  return (
    <>
      <AppBarComponent />
      <Outlet />
    </>
  );
};
