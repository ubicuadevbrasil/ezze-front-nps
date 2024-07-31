import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticationLayout } from '../pages/layouts/Authentication';
import { Login } from '../pages/authentication/Login';
import { RecoverPassword } from '../pages/authentication/RecoverPassword';
import { NewPassword } from '../pages/authentication/NewPassoword';


const RoutesPage: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthenticationLayout />}>
            <Route path='/' element={<Login />} />
            <Route path='/recover-password' element={<RecoverPassword />} />
            <Route path='/new-password' element={<NewPassword />} />
        </Route>
    </Routes>
  );
}

export { RoutesPage };