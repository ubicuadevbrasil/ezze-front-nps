import React from 'react';
import { Outlet } from 'react-router-dom';
import Authentication from "../../assets/Authentication.svg"
import Logo from '../../assets/Logo.svg'

const AuthenticationLayout: React.FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col lg:flex-row justify-end'>
        <div className="flex flex-col w-full justify-center items-center relative">
        <div className="w-2/4 flex flex-col items-center">
            <img src={Logo} 
                className='mb-8 w-2/3'    
                alt="Logo resolve assist"
            />
        <Outlet />
        </div>

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