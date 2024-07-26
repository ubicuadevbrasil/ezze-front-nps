import React from 'react';
import { Outlet } from 'react-router-dom';
import Authentication from "../../assets/Authentication.svg"

const AuthenticationLayout: React.FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row justify-end'>
        <Outlet />
        <img src={Authentication} 
            alt='Imagem de uma pessoa enchendo o pneu'
            className=''    
        />
    </div>
  );
}

export { AuthenticationLayout };