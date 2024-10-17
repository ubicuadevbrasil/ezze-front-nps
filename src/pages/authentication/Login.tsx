import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { login } from '@/features/Authentication/AuthenticationSlice'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'

interface LoginResponse {
	token: string
	refreshToken: string
}

const Login: React.FC = () => {
	const [visible, setVisible] = useState(false)
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isDisabled, setIsDisabled] = useState(true)

	useEffect(() => {
		setIsDisabled(email === '' || password === '')
	}, [email, password])

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			const response = await dispatch(login({ userName: email, password })) // O dispatch agora está tipado

			if (response.meta.requestStatus === 'fulfilled') {
				const { token, refreshToken }: LoginResponse = response.payload // Ajuste conforme sua resposta
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
			<div className="w-full flex flex-col gap-4 mt-4">
				<div className="w-full flex flex-col p-2 bg-white rounded border border-[#C0C7D4]">
					<label htmlFor="username" className="text-[10px] text-[#687286]">
						Nome de usuário
					</label>
					<input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="username" placeholder="Escreva aqui" className="placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
				</div>
				<div className="w-full flex py-2 px-3 bg-white rounded border border-[#C0C7D4]">
					<div className="w-full flex flex-col">
						<label htmlFor="password" className="text-[10px] text-[#687286]">
							Senha
						</label>
						<input type={visible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Digite aqui a senha" className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" />
					</div>
					<button onClick={() => setVisible(!visible)}>{visible ? <EyeSlash size={24} /> : <Eye size={24} />}</button>
				</div>
				<Link to={'/recover-password'} className="hover:text-blue-500 transition-colors duration-300 text-xs text-[#1E3868] md:bg-transparent block pl-3 pr-4 py-2 md:text-black md:p-0 rounded focus:outline-none">
					Esqueci minha senha
				</Link>
				<button disabled={isDisabled} onClick={handleLogin} className="w-full flex justify-center py-2 bg-[#365DA5] text-white font-semibold rounded disabled:opacity-60">
					Entrar
				</button>
			</div>
		</>
	)
}

export { Login }
