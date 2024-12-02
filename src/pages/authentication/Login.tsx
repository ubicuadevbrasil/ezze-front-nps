import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '@/features/Authentication/AuthenticationSlice'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/store'

const signInForm = z.object({
	email: z.string().email(),
	password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

const Login: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInForm>()
	const [visible, setVisible] = useState(false)
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const handleLogin = async (data: SignInForm) => {
			await dispatch(login({ email: data.email, password: data.password }))
			navigate('/closetheloop')
	}

	return (
		<>
			<p className="font-bold w-full text-sm">Bem vindo ao sistema administrativo!</p>
			<p className="w-full text-sm">Para iniciar o serviço faça seu login:</p>
			<form onSubmit={handleSubmit(handleLogin)} className="w-full flex flex-col gap-4 mt-4">
				<div className="w-full flex flex-col p-2 bg-white rounded-md  border border-[#C0C7D4]">
					<label htmlFor="username" className="text-[10px] text-[#687286]">
						Nome de usuário
					</label>
					<input type="text" id="username" {...register('email')} placeholder="Escreva aqui" className="placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
				</div>
				<div className="w-full flex py-2 px-3 bg-white rounded-md  border border-[#C0C7D4]">
					<div className="w-full flex flex-col">
						<label htmlFor="password" className="text-[10px] text-[#687286]">
							Senha
						</label>
						<input id="password" type={visible ? 'text' : 'password'} {...register('password')} placeholder="Digite aqui a senha" className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
					</div>
					<button type="button" onClick={() => setVisible(!visible)}>
						{visible ? <EyeSlash size={24} /> : <Eye size={24} />}
					</button>
				</div>
				<Link to={'/auth/recover-password'} className="hover:text-blue-500 transition-colors duration-300 text-xs text-[#1E3868] md:bg-transparent block pl-3 pr-4 py-2 md:text-black md:p-0 rounded-md  focus:outline-none">
					Esqueci minha senha
				</Link>
				<button disabled={isSubmitting} className="w-full flex justify-center py-2 bg-[#365DA5] text-white font-semibold rounded-md  disabled:opacity-60">
					Entrar
				</button>
			</form>
		</>
	)
}

export { Login }
