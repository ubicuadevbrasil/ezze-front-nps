import { TemplatePage } from './TemplatePage'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'

// type IPedingSearch = {
// 	idAssistencia: string
// 	nome: string
// 	ciaCliente: string
// 	telefone: number
// 	numeroAssistencia: number
// 	dataPrimeroDisparo: Date
// 	tipoServico: string
// 	formato: 'E-mail' | 'SMS'
// 	submit: 'Sim' | 'Não'
// 	tentativaContato: object
// 	conversa: object
// }

// type IStateNavigation = {
// 	client: IPedingSearch
// 	attendant: string
// 	ratting: number
// }

function Detractor() {
	//const location = useLocation()
	const navigate = useNavigate()
	//const surveyData = location.state as IStateNavigation
	const [RatingYesOrNoSelected, setRatingYesOrNoSelected] = useState<string>()
	const [RatingSituationSelected, setRatingSituationSelected] = useState<string>()
	const [isDisableSubmit, setIsDisableSubmit] = useState(true)

	const handleSubmit = useCallback(() => {
		/* const date = {
			name: surveyData.client.nome,
			id: surveyData.client.idAssistencia,
			ratingCenterServiceSelected: RatingCenterServiceSelected,
			ratingAttendantsSelected: RattingAttendantsSelected,
			ratingTimeToBeServedSelected: RattingTimeToBeServedSelected,
			ratting: surveyData.ratting
		} */

		navigate('/survey/final')

		/* DetractorAPI.post(date).then(() => {
			navigate('final')
		}).catch((e) => {
			console.log(e)
		}) */
	}, [RatingSituationSelected, RatingYesOrNoSelected])

	useEffect(() => {
		if (RatingSituationSelected && RatingYesOrNoSelected) setIsDisableSubmit(false)
			else setIsDisableSubmit(true)
	}, [RatingSituationSelected, RatingYesOrNoSelected])

	return (
		<TemplatePage>
			<div className="flex flex-col justify-center text-center text-sm bg-white shadow-lg p-5 gap-5 rounded-md -lg">
				<div className="flex flex-col gap-4">
					<p>Lamentamos saber que sua experiência não foi satisfatória. Você gostaria de falar com um atendente para informar o que houve?</p>
					<RatingYesOrNo onSelect={setRatingYesOrNoSelected} selected={RatingYesOrNoSelected as string} />
				</div>

				<div className="flex flex-col gap-3">
					<p>Para entendermos melhor a sua avaliação e podermos melhorar nossos serviços, você poderia nos dizer o principal motivo da sua nota?</p>
					<p>Sua resposta é muito importante para nós. Por favor, digite o número da opção que mais influenciou sua avaliação, considerando a lista abaixo:</p>
				</div>

				<RatingSituation onSelect={setRatingSituationSelected} selected={RatingSituationSelected as string} />

				<Button className="bg-[#365da5] my-4" disabled={isDisableSubmit} onClick={handleSubmit}>
					Enviar
				</Button>
			</div>
		</TemplatePage>
	)
}

interface RatingScaleProps {
	selected: string
	onSelect: (rating: string) => void
}

export const RatingYesOrNo = ({ onSelect, selected }: RatingScaleProps) => {
	const ratings = ['Não', 'Sim']

	return (
		<div className="flex gap-2 justify-center items-center">
				{ratings.map((rating) => (
					<Button
						key={rating}
						variant={selected === rating ? 'default' : 'outline'}
						onClick={() => onSelect(rating)}
						className={`
              px-4 py-2
              ${selected === rating ? 'bg-[#365da5] text-white' : 'border-gray-300 hover:bg-gray-100'}
              transition-colors
              duration-200
              w-20
              text-sm
              font-medium
            `}>
						{rating}
					</Button>
				))}
		</div>
	)
}

export const RatingSituation = ({ onSelect, selected }: RatingScaleProps) => {
	const ratings = ['Eficiência na abertura da assistência', 'Cordialidade e simpatia do atendente', 'Previsão de chegada do prestador de serviço', 'Postura do prestador de serviço', 'Realização do serviço', 'Cobertura e condições de apólice']

	return (
			<div className="flex flex-col gap-2 items-center">
				{ratings.map((rating) => (
					<Button
						key={rating}
						variant={selected === rating ? 'default' : 'outline'}
						onClick={() => onSelect(rating)}
						className={`
              px-4 py-2
              ${selected === rating ? 'bg-[#365da5] text-white' : 'border-gray-300 hover:bg-gray-100'}
              transition-colors
              duration-200
              w-full
              text-sm
              font-medium
            `}>
				<p className='text-start w-full'>

						{rating}
				</p>
					</Button>
				))}
		</div>
	)
}

export { Detractor }
