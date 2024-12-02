import { TemplatePage } from './TemplatePage'
import ImageSurvey from '@/assets/ImageSurvey.svg'


function Final() {

	return (
		<TemplatePage>
			<div className="flex justify-center">
				<img src={ImageSurvey} alt="Illustration of a living room with a sofa and shelves" className="rounded-md -lg" />
			</div>
			<div className="flex flex-col gap-3 text-center bg-white rounded-md -xl p-5">
				<h2 className="text-base font-bold text-gray-900">Obrigado pela atenção!</h2>
				<p>Recebemos sua opinião com sucesso! A sua resposta é muito importante para melhorar os nossos serviços.</p>

				<h2 className="text-base font-bold text-gray-900">Você já pode fechar esta página.</h2>
			</div>
		</TemplatePage>
	)
}



export { Final }
