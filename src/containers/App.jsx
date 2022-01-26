import React from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const loading = (
  <div className="pt-3 text-center">
    <Spinner animation="border" variant="primary" />
  </div>
);
const Layout = React.lazy(() => import('./Layout'));
const Login = React.lazy(() => import('../views/login/Login'));
const Page404 = React.lazy(() => import('../views/page404/Page404'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={loading}>
              <Layout />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={loading}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={loading}>
              <Page404 />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
