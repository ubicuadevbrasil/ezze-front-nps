import React from 'react';
import { Outlet } from 'react-router-dom';
import Authentication from "../../assets/Authentication.svg"

const AuthenticationLayout: React.FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row justify-end'>
        <div className="flex flex-col w-full justify-center items-center relative">
        <Outlet />

            <div className="flex w-full justify-center py-2 bg-[#D9DDE5] absolute bottom-0 text-[10px]">
                {new Date().getFullYear()} - Powered by Ubicua ©
            </div>
        </div>
        <img src={Authentication} 
            alt='Imagem de uma pessoa enchendo o pneu'
            className=''    
        />
    </div>
  );
}

export { AuthenticationLayout };