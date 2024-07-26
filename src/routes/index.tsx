import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticationLayout } from '../pages/layouts/Authentication';
import { Login } from '../pages/authentication/Login';


const RoutesPage: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthenticationLayout />}>
            <Route path='/' element={<Login />} />
        </Route>
    </Routes>
  );
}

export { RoutesPage };