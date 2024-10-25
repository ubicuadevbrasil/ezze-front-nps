import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Authentication from "../../assets/Authentication.svg";
import Logo from "../../assets/Logo.svg";

const AuthenticationLayout: React.FC = () => {

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row justify-center">
      <div className="flex flex-col w-full h-full justify-center items-center relative z-10">
        <div className="flex flex-col items-center w-4/5">
          <img src={Logo} className="mb-8 w-2/3" alt="Logo resolve assist" />
          <Outlet />
        </div>
        <footer className="flex w-full justify-center py-2 bg-[#D9DDE5] absolute bottom-0 text-[10px]">
          {new Date().getFullYear()} - Powered by Ubicua ©
        </footer>
      </div>
      <img
        src={Authentication}
        alt="Imagem de uma pessoa enchendo o pneu"
        className="lg:static opacity-55 lg:opacity-100 absolute inset-0 z-0 object-cover w-full h-full lg:w-auto lg:h-auto"
      />
    </div>
  );
};

export { AuthenticationLayout };

