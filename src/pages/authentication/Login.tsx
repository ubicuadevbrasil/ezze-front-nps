import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { login } from '@/features/Authentication/AuthenticationSlice'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'

const signInForm = z.object({
	email: z.string().email(),
	password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

const Login: React.FC = () => {
	const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>()

	const [visible, setVisible] = useState(false)
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [IsDesable, setIsDesable] = useState(true)

	useEffect(() => {
		if (email !== '' && password !== '') {
			setIsDesable(false)
		} else {
			setIsDesable(true)
		}
	}, [email, password])


	const handleLogin = async (data: SignInForm) => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))

			const response = await dispatch(login({ username: data.email, password: data.password }) as any)

			if (response.meta.requestStatus === 'fulfilled') {
				const { token, refreshToken } = response.payload // Ajuste conforme sua resposta
				console.log('Token:', token)
				console.log('Refresh Token:', refreshToken)

				// Salvar no localStorage
				localStorage.setItem('token', token)
				localStorage.setItem('refreshToken', refreshToken)
			} else {
				console.error('Erro ao despachar a ação:', response.error)
			}
		} catch (error) {
			console.error('Erro no login:', error)
		}
	}

	return (
		<>
			<p className="font-bold w-full text-sm">Bem vindo ao sistema administrativo!</p>
			<p className="w-full text-sm">Para iniciar o serviço faça seu login:</p>
			<form onSubmit={handleSubmit(handleLogin)} className="w-full flex flex-col gap-4 mt-4">
				<div className="w-full flex flex-col p-2 bg-white rounded border border-[#C0C7D4]">
					<label htmlFor="username" className="text-[10px] text-[#687286]">
						Nome de usuário
					</label>
					<input type="text" id="username" {...register('email')} placeholder="Escreva aqui" className="placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
				</div>
				<div className="w-full flex py-2 px-3 bg-white rounded border border-[#C0C7D4]">
					<div className="w-full flex flex-col">
						<label htmlFor="password" className="text-[10px] text-[#687286]">
							Senha
						</label>

						{/* <input type={visible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Digite aqui a senha" className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" /> */}
						<input id="password" {...register('password')} placeholder="Digite aqui a senha" className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
					</div>
					<button onClick={() => setVisible(!visible)}>{visible ? <EyeSlash size={24} /> : <Eye size={24} />}</button>
				</div>
				<Link to={'/recover-password'} className="hover:text-blue-500 transition-colors duration-300 text-xs text-[#1E3868] md:bg-transparent block pl-3 pr-4 py-2 md:text-black md:p-0 rounded focus:outline-none">
					Esqueci minha senha
				</Link>
				<a className="text-black md:b g-transparent block pl-3 pr-4 py-2 md:text-black md:p-0 rounded focus:outline-none" aria-current="page"></a>
				<button disabled={isSubmitting} className="w-full flex justify-center py-2 bg-[#365DA5] text-white font-semibold rounded disabled:opacity-60">
					Entrar
				</button>
			</form>
		</>
	)
}

export { Login }
