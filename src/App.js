// import { useState} from 'react';
// import { Suspense } from 'react';
import { Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Home } from './components/Home/Home';
import { ContactsPage } from './views/ContactsPage/ContactsPage';
import { LoginPage } from './views/LoginPage/LoginPage';
import { AppBar } from './views/AppBar/AppBar';
import { RegisterPage } from './views/RegisterPage/RegisterPage';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { authSelectors } from './redux/auth/auth-selectors';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      {isFetchingCurrentUser ? (
        <h1>грузимо...</h1>
      ) : (
        <>
          <header>
            <AppBar />
          </header>
          <main>
            {/* <Suspense fallback={<h1>Loading...</h1>}> */}
            <Switch>
              <PublicRoute exact path="/">
                <Home />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/" restricted>
                <ContactsPage />
              </PrivateRoute>
            </Switch>
            {/* </Suspense> */}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
