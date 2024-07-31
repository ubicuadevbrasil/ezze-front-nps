import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Eye, EyeSlash } from '@phosphor-icons/react';

const Login: React.FC = () => {
	const { register, handleSubmit, watch } = useForm()
	const [visible, setVisible] = useState(false)

	const handleSignIn = (data: any) => {
		console.log(data)
	}

	const username = watch('username')
	const password = watch('password')
	const isSubmitDisable = !username || !password

  return (
    <>
      <p className="font-bold w-full text-sm">
        Bem vindo ao sistema administrativo!
      </p>
      <p className="w-full text-sm">Para iniciar o serviço faça seu login:</p>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        action=""
        className="w-full flex flex-col gap-4 mt-4"
      >
        <div className="w-full flex flex-col p-2 bg-white rounded border border-[#C0C7D4]">
          <label htmlFor="username" className="text-[10px] text-[#687286]">
            Nome de usuário
          </label>
          <input
            type="text"
            id="username"
            placeholder="Escreva aqui"
            className="placeholder:text-sm placeholder:text-[#A8B1C2] outline-none"
            {...register("username")}
          />
        </div>
        <div className="w-full flex py-2 px-3 bg-white rounded border border-[#C0C7D4]">
          <div className="w-full flex flex-col">
            <label htmlFor="password" className="text-[10px] text-[#687286]">
              Senha
            </label>

            <input
              type={visible ? "text" : "password"}
              id="password"
              placeholder="Digite aqui a senha"
              className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none"
              {...register("password")}
            />
          </div>
          <button onClick={() => setVisible(!visible)}>
            {visible ? <EyeSlash size={24} /> : <Eye size={24} />}
          </button>
        </div>
        <Link to={"/recover-password"} className="text-xs text-[#1E3868]">
          Esqueci minha senha
        </Link>
        <button
          disabled={isSubmitDisable}
          className="w-full flex justify-center py-2 bg-[#365DA5] text-white font-semibold rounded disabled:opacity-60"
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export { Login };