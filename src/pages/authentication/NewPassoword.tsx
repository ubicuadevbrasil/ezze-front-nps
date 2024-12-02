import { CaretCircleLeft, Eye, EyeSlash } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

// Define a interface para os dados do formulário
interface NewPasswordFormData {
	password: string // Define que o campo password será uma string
}

const NewPassword: React.FC = () => {
	const { register, handleSubmit, watch } = useForm<NewPasswordFormData>() // Passa a interface para o useForm
	const [visible, setVisible] = useState(false)

	const handleSendCode = (data: NewPasswordFormData) => {
		// Altera o tipo de data
		console.log(data)
	}

	const password = watch('password')
	const isSubmitDisable = !password

	return (
		<>
			<Link to={'/recover-password'} className="flex gap-2.5 self-start items-center mb-3 py-2 px-3 rounded-md  bg-[#D9DDE5]">
				<CaretCircleLeft size={24} />
				Voltar
			</Link>
			<p className="w-full text-sm mb-3">Preencha os campos abaixo para confirmar e habilitar a criação de uma nova senha:</p>
			<input type="text" className="w-full py-4 px-3 mb-2 rounded-md  border border-[#B6AFAF] bg-[#F1F3FE] font-semibold text-2xl text-[#365DA5] text-center outline-none" />
			<button className="self-start text-xs text-[#1E3868]">Encaminhar novo código</button>
			<form action="" onSubmit={handleSubmit(handleSendCode)} className="w-full flex flex-col gap-4 mt-4">
				<div className="w-full flex py-2 px-3 bg-white rounded-md  border border-[#C0C7D4]">
					<div className="w-full flex flex-col">
						<label htmlFor="password" className="text-[10px] text-[#687286]">
							Senha
						</label>

						<input type={visible ? 'text' : 'password'} id="password" placeholder="Digite aqui a senha" className="w-full placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" {...register('password')} />
					</div>
					<button type="button" onClick={() => setVisible(!visible)}>
						{' '}
						{/* Adicione type="button" */}
						{visible ? <EyeSlash size={24} /> : <Eye size={24} />}
					</button>
				</div>
				<button disabled={isSubmitDisable} className="w-full flex justify-center py-2 bg-[#365DA5] text-white rounded-md  disabled:opacity-40">
					Alterar senha
				</button>
			</form>
		</>
	)
}

export { NewPassword }
