import React from 'react'

interface MainReasonProps {
	selectedStep: string
}

const MainReason: React.FC<MainReasonProps> = ({ selectedStep }) => {
	const steps = ['Contato com a Central de atendimento', 'Chegada do Provedor', 'Prestação de serviço', 'Serviços Cobertos']

	return (
		<div className="flex gap-3">
			{steps.map((step) => (
				<button key={step} className={`border px-3 py-2 rounded-sm text-sm ${selectedStep === step ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
					{step}
				</button>
			))}
		</div>
	)
}

export default MainReason
