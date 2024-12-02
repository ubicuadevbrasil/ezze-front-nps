import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CaretCircleLeft } from '@phosphor-icons/react'

// Define a interface para os dados do formulário
interface RecoverPasswordFormData {
	radio: 'email' | 'sms' // Define os valores possíveis para o campo radio
	contact: string // Define que o contato será uma string
}

const RecoverPassword: React.FC = () => {
	const [selectedValue, setSelectedValue] = useState<string>('email')
	const { register, handleSubmit, watch } = useForm<RecoverPasswordFormData>() // Passa a interface para o useForm

	const handleSendCodeToContact = (data: RecoverPasswordFormData) => {
		// Altera o tipo de data
		console.log(data)
	}

	const contact = watch('contact')
	const isSubmitDisable = !contact

	return (
		<>
			<Link to={'/'} className="flex gap-2.5 self-start items-center mb-3 py-2 px-3 rounded-md  bg-[#D9DDE5]">
				<CaretCircleLeft size={24} />
				Voltar
			</Link>
			<p className="w-full text-sm mb-3">Para prosseguir, iremos enviar um código para confirmarmos seu acesso. Selecione uma das opções de envio:</p>
			<form onSubmit={handleSubmit(handleSendCodeToContact)} action="" className="w-full flex flex-col gap-4 mt-4">
				<div className="w-full flex gap-2.5">
					<label htmlFor="email" className={`w-full flex justify-center py-2 border rounded-md  ${selectedValue === 'email' ? 'bg-[#1E3868] text-white border-[#6384D3]' : ''}`}>
						<input type="radio" id="email" value={'email'} checked={selectedValue === 'email'} {...register('radio', { onChange: (e) => setSelectedValue(e.target.value) })} className="hidden" />
						E-mail
					</label>
					<label htmlFor="sms" className={`w-full flex justify-center py-2 border rounded-md  ${selectedValue === 'sms' ? 'bg-[#1E3868] text-white border-[#6384D3]' : ''}`}>
						<input type="radio" id="sms" value={'sms'} checked={selectedValue === 'sms'} {...register('radio', { onChange: (e) => setSelectedValue(e.target.value) })} className="hidden" />
						SMS
					</label>
				</div>

				<div className="w-full flex flex-col p-2 bg-white rounded-md  border border-[#C0C7D4]">
					<label htmlFor="contact" className="text-[10px] text-[#687286]">
						{selectedValue === 'email' ? 'E-mail' : 'Número'}
					</label>
					<input type="text" id="contact" placeholder="Escreva aqui" className="placeholder:text-sm placeholder:text-[#A8B1C2] outline-none" {...register('contact')} />
				</div>

				<button disabled={isSubmitDisable} className="w-full flex justify-center py-2 bg-[#365DA5] text-white rounded-md  disabled:opacity-40">
					Enviar recuperação de senha
				</button>
			</form>
		</>
	)
}

export { RecoverPassword }
