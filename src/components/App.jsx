import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { Loader } from './Loader/Loader';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { PublicRoute } from 'HOCs/PublicRoute/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute/PrivateRoute';

const LazyHomePage = lazy(() => import('pages/HomePage/HomePage'));
const LazyRegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LazyLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const LazyContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <LazyHomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <LazyRegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LazyLoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <LazyContactsPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
