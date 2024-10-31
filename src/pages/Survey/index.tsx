import { Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import ImageSurvey from '@/assets/ImageSurvey.svg'
import { TemplatePage } from './TemplatePage'
import { useNavigate } from 'react-router-dom'
import { Spinner } from '@/components/ui/Spinner'

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

interface SurveyData {
	client: IPedingSearch
	attendant: string
	timestamp: number
}

function Survey() {
	const location = useLocation()
	const navigate = useNavigate()
	const [RatingScaleSelected, setRatingScaleSelected] = useState<number>()

	const [searchParams] = useSearchParams()
	const [surveyData, setSurveyData] = useState<SurveyData | null>(null)

	useEffect(() => {
		// Pega o ID da URL
		const surveyId = searchParams.get('id')

		if (surveyId) {
			// Recupera os dados do localStorage
			const storedData = localStorage.getItem(surveyId)

			if (storedData) {
				// Converte os dados de string JSON para objeto
				const parsedData: SurveyData = JSON.parse(storedData)

				// Verifica se os dados não expiraram (exemplo: 1 hora de validade)
				const oneHour = 60 * 60 * 1000 // em milissegundos
				if (new Date().getTime() - parsedData.timestamp < oneHour) {
					setSurveyData(parsedData)
				} else {
					console.log('Dados expirados')
				}

				// Remove os dados do localStorage após o uso
				localStorage.removeItem(surveyId)
			} else {
				console.log('Dados não encontrados')
			}
		}
	}, [searchParams])

	if (!surveyData) {return(
		<TemplatePage>
			<div className="flex flex-col items-center justify-center w-full">
				<Spinner/>
			</div>
		</TemplatePage>
	)}

	if (location.pathname === '/survey') {
		return (
			<TemplatePage>
				<div className="flex justify-center">
					<img src={ImageSurvey} alt="Illustration of a living room with a sofa and shelves" className="rounded-lg" />
				</div>
				<div className="bg-white shadow-lg p-4 rounded-lg">
					<p className="text-center text-xs font-semibold">Olá {surveyData?.client.nome}, tudo bem?</p>
					<p className="text-center text-xs mb-2">Sou {surveyData?.attendant} da Ezze Seguros. Gostaria de saber a sua opinião sobre o atendimento que acabou de receber em nossa central.</p>
					<p className="text-center text-xs">Você poderia nos ajudar respondendo a uma breve pesquisa? Sua opinião é muito importante para nós e nos ajuda a melhorar cada vez mais. 😊</p>
				</div>
				<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md flex flex-col gap-4 items-center">
					<RatingScale onSelect={setRatingScaleSelected} selected={RatingScaleSelected} />
					<Button
						disabled={!RatingScaleSelected}
						onClick={() => {
							if ((RatingScaleSelected as number) <= 3) navigate('detractor', {state: surveyData})
							else navigate('promoter', {state: surveyData})
						}}
						className="bg-[#365da5] text-white py-2 w-72 px-4 rounded-sm">
						Próxima página
					</Button>
				</div>
			</TemplatePage>
		)
	}

	return <Outlet />
}

interface RatingScaleProps {
	selected?: number
	onSelect: (number: number) => void
}

export const RatingScale = ({ onSelect, selected }: RatingScaleProps) => {
	const getColor = (num: number) => {
		if (num <= 3) return 'bg-[#d92d1f] text-white'
		if (num <= 7) return 'bg-[#e8b500]'
		return 'bg-green-500'
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<p className="text-center text-xs mb-4">Por favor, em uma escala de 1 a 10, qual a probabilidade de você recomendar a Ezze Seguros para um amigo ou colega?</p>
			<div className="grid grid-cols-5 gap-2 w-60">
				{[...Array(10).keys()].map((num) => (
					<Button variant={'ghost'} key={num + 1} onClick={() => onSelect(num + 1)} className={`border w-10 border-gray-300 rounded-lg py-2 text-center text-lg font-semibold ${selected === num + 1 ? `${getColor(num + 1)} hover:${getColor(num + 1)}` : 'bg-white'}`}>
						{num + 1}
					</Button>
				))}
			</div>
		</div>
	)
}

export default Survey
