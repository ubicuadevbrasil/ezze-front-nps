import ImageSurvey from '@/assets/ImageSurvey.svg'
import { TemplatePage } from './TemplatePage'

function Detractor() {

	return (
		<TemplatePage>
			<div className="flex justify-center">
				<img src={ImageSurvey} alt="Illustration of a living room with a sofa and shelves" className="rounded-lg" />
			</div>
			<div className="bg-white shadow-lg p-4 rounded-lg">
				<p className="text-center text-xs font-semibold">Olá (Nome), tudo bem?</p>
				<p className="text-center text-xs mb-2">Sou XXXX da Ezze Seguros. Gostaria de saber a sua opinião sobre o atendimento que acabou de receber em nossa central.</p>
				<p className="text-center text-xs">Você poderia nos ajudar respondendo a uma breve pesquisa? Sua opinião é muito importante para nós e nos ajuda a melhorar cada vez mais. 😊</p>
			</div>
		</TemplatePage>
	)
}

export {Detractor}
