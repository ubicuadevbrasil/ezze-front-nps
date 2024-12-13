import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import { TemplatePage } from './TemplatePage'
import { useLocation, useNavigate } from 'react-router-dom'

type IPedingSearch = {
	idAssistencia: string
	nome: string
	ciaCliente: string
	telefone: number
	numeroAssistencia: number
	dataPrimeroDisparo: Date
	tipoServico: string
	formato: 'E-mail' | 'SMS'
	submit: 'Sim' | 'Não'
	tentativaContato: object
	conversa: object
}

type IStateNavigation = {
	client: IPedingSearch
	attendant: string,
	ratting: number
}


function Promoter
() {
	const location = useLocation()
	const navigate = useNavigate()
	const surveyData = {
  client: {
    idAssistencia: "123456",
    nome: "João Silva",
    ciaCliente: "Empresa XYZ",
    telefone: 11987654321,
    numeroAssistencia: 654321,
    dataPrimeroDisparo: new Date("2024-12-01T10:30:00Z"),
    tipoServico: "Manutenção",
    formato: "E-mail",
    submit: "Sim",
    tentativaContato: {
      dataTentativa: "2024-12-01",
      sucesso: false,
    },
    conversa: {
      mensagens: [
        { autor: "cliente", mensagem: "Qual o prazo de atendimento?" },
        { autor: "atendente", mensagem: "O prazo é de 3 dias úteis." },
      ],
    },
  },
  attendant: "Maria Oliveira",
  ratting: 4.5,
};

	const [RatingCenterServiceSelected, setRatingCenterServiceSelected] = useState<number>()
	const [RattingAttendantsSelected, setRattingAttendantsSelected] = useState<number>()
	const [RattingTimeToBeServedSelected, setRattingTimeToBeServedSelected] = useState<number>()
	const [isDisableSubmit, setIsDisableSubmit] = useState(true)

	const handleSubmit = useCallback(
	  () => {
		/* const date = {
			name: surveyData.client.nome,
			id: surveyData.client.idAssistencia,
			ratingCenterServiceSelected: RatingCenterServiceSelected,
			ratingAttendantsSelected: RattingAttendantsSelected,
			ratingTimeToBeServedSelected: RattingTimeToBeServedSelected,
			ratting: surveyData.ratting
		} */

		navigate('/survey/final')

		/* PromoterAPI.post(date).then(() => {
			navigate('final')
		}).catch((e) => {
			console.log(e)
		}) */
	  },
	  [RattingAttendantsSelected, RatingCenterServiceSelected, RattingTimeToBeServedSelected],
	)


	useEffect(() => {
		if (RattingAttendantsSelected && RatingCenterServiceSelected && RattingTimeToBeServedSelected) setIsDisableSubmit(false)
		else setIsDisableSubmit(true)
	}, [RattingAttendantsSelected, RatingCenterServiceSelected, RattingTimeToBeServedSelected])

	return (
		<TemplatePage>
			<div className="flex flex-col gap-5 bg-white rounded-md -xl p-5">
				<div className="flex flex-col gap-2 text-center text-sm">
					<p>{surveyData.client.nome}, agradecemos por sua participação. O que você achou do atendimento da Central?</p>

					<RatingScale onSelect={setRatingCenterServiceSelected} selected={RatingCenterServiceSelected as number} />
				</div>

				<div className="flex flex-col gap-2 text-center text-sm">
					<p>Quanto à postura do prestador e à forma como ele se comunicou, o que você achou?</p>

					<RatingScale onSelect={setRattingAttendantsSelected} selected={RattingAttendantsSelected as number} />
				</div>

				<div className="flex flex-col gap-2 text-center text-sm">
					<p>Você achou que o tempo para ser atendida pelo prestador foi adequado?</p>

					<RatingScale onSelect={setRattingTimeToBeServedSelected} selected={RattingTimeToBeServedSelected as number} />
				</div>
				<Button className="bg-[#365da5]" disabled={isDisableSubmit} onClick={handleSubmit}>
					Enviar
				</Button>
			</div>
		</TemplatePage>
	)
}


interface RatingScaleProps {
	selected: number
	onSelect: (rating: number) => void
}

export const RatingScale = ({ onSelect, selected }: RatingScaleProps) => {
	const ratings = [
		{ label: 'Excelente', value: 4 },
		{ label: 'Bom', value: 3 },
		{ label: 'Regular', value: 2 },
		{ label: 'Ruim', value: 1 },
	]

	return (
		<div className="flex gap-2 justify-center items-center">
				{ratings.map((rating) => (
					<Button
						key={rating.label}
						variant={selected === rating.value ? 'default' : 'outline'}
						onClick={() => onSelect(rating.value)}
						className={`
              px-4 py-2
              ${selected === rating.value ? 'bg-[#365da5] text-white' : 'border-gray-300 hover:bg-gray-100'}
              transition-colors
              duration-200
              w-20
              text-sm
              font-medium
            `}>
						{rating.label}
					</Button>
				))}
		</div>
	)
}


export { Promoter
 }
