import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ConfirmationModal from '@/components/ui/ConfirmationModal'
import ProgressBar from '@/components/ui/ProgressBar'
import { Bell } from '@phosphor-icons/react'
import MainReason from '@/components/ui/MainReason'
import { BaseTemplate } from '../layouts/BaseTemplate'

export default function Index() {
	// const location = useLocation()
	const [isModalVisible, setModalVisible] = useState(false)

	const handleConfirm = () => {
		console.log('Confirmed!')
		setModalVisible(false)
	}
	const handleCancel = () => {
		console.log('Cancelled!')
		setModalVisible(false)
	}
	// const clientData: ICloseTheLoop = location.state

	return (
		<BaseTemplate>
			{<ConfirmationModal isVisible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel} message="Você deseja tabular uma tentativa de contato?" />}
				<div className="w-full pt-2 pb-4 px-3 gap-5 flex flex-row  items-center justify-between">
					<div className="flex flex-row gap-5 items-center">
						<Button className="text-lg bg-[#104b94] h-10 px-3">Voltar</Button>
						<h1 className="text-base font-medium">Alfredo</h1>
					</div>
					<div className="gap-2 flex">
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Responder Pesquisa
						</Button>
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Tabular tentativa de contato
						</Button>
						<Button className="rounded-sm px-3 py-2.5 border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Voltar
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-3 grid-rows-3 gap-2 mx-3">
					<div className='row-span-2 py-2 px-4 bg-white flex flex-col gap-1 rounded-sm'>
						<h1 className="font-medium text-sm">Informações sobre o cliente</h1>
						<table>
							<tbody>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Nome do Cliente</td>
									<td>DEISEMATOS DO ESPIRITO SANTO</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Email do Cliente</td>
									<td>-</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Gênero</td>
									<td>-</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Telefone do Cliente</td>
									<td>11947571208</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Data de Nascimento</td>
									<td>-</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Estado do Cliente</td>
									<td>São Paulo</td>
								</tr>
								<tr className='border-b border-[#B6AFA4] text-xs'>
									<td className='py-3 px-2'>Cidade do Cliente</td>
									<td>São Paulo</td>
								</tr>
								<tr className='text-xs'>
									<td className='py-3 px-2'>Endereço</td>
									<td>-</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='col-span-2 row-span-2 py-2 px-4 bg-white flex flex-col gap-2 rounded-sm'>
						<h1 className="font-medium text-sm">Informações sobre a transação</h1>
						<div className=" flex flex-row">
							<table className='w-full'>
								<tbody>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Número da assistência</td>
										<td>124536598</td>
										<td>Código de serviço</td>
										<td>4000</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Datade Abertura do Arquivo</td>
										<td>21/07/2024</td>
										<td>Endereço dos serviços</td>
										<td>GUARULHOS, SÃO PAULO, SUDESTE</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Tipo de Assistência</td>
										<td>EMERGENCIA</td>
										<td>Data do serviço</td>
										<td>21/07/2024</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Garantia</td>
										<td>ELETRICISTA</td>
										<td>Tipo de prestador</td>
										<td>CONSTRUÇÃO MANUTENÇÃO CIVIL</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Risco</td>
										<td>CONSTRUÇÃO E INSTALAÇÕES</td>
										<td>Nome do prestador</td>
										<td>EMBAJADOR MAWDY - HOME SERVICE</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Número do contrato</td>
										<td>40000044089</td>
										<td>Estado do prestador</td>
										<td>SÃO PAULO</td>
									</tr>
									<tr className='border-b border-[#B6AFA4] text-xs'>
										<td className='py-3 px-2'>Centro Trasmitador</td>
										<td>TAMBORE</td>
										<td>Cidade do prestador</td>
										<td>GUARULHOS</td>
									</tr>
									<tr className='text-xs'>
										<td className='py-3 px-2'>Tipo de Serviço</td>
										<td>ELETRICISTA</td>
										<td>Canal de resposta</td>
										<td>SMS</td>
									</tr>
								</tbody>
							</table>

						</div>
						</div>
						<div className="py-2 px-4 bg-white flex flex-col gap-4 rounded-sm">
							<h2 className="text-slate-900 font-medium text-sm">Atividades</h2>
							<div className="flex items-center gap-4">
								<div className="bg-[#104b94] rounded-full p-2 w-fit">
									<Bell size={30} color="white" />
								</div>
								<div>
									<h2 className="text-slate-600 text-sm">Alerta criado</h2>
									<p className="text-gray-500 text-sm">22/07/2024, 09:30:20 - Sistema</p>
								</div>
							</div>
						</div>
						<div className="col-span-2 py-2 px-4 pt-2 pb-3 bg-white flex flex-col gap-2 rounded-sm">
							<h2 className="text-slate-900 font-medium text-sm">Feedback</h2>
							<div className="flex items-center gap-4">
								<div className="bg-[#104b94] rounded-full p-2 w-fit">
									<Bell size={30} color="white" />
								</div>
								<div className='flex flex-col gap-1 w-full'>
									<h2 className="text-slate-600 text-sm">Comentário(recebidos pela Resolve)</h2>
									<p className="text-gray-500 text-sm">
										A última atendente foi perfeita, mas passei por 5 antes, ningéum sabia me orientar, me passaram vários números! Eu gostaria de pedir para que o prestador voltasse em minha residência, ele esqueceu duas tesouras que vão fazer falta para ele!!
									</p>
								</div>
							</div>
						</div>
				</div>

				<div className="flex flex-col gap-6 mt-2 mx-3 py-2 px-4 rounded-sm bg-white ">
					<div className="flex flex-col gap-4 w-1/3">
						<h2 className="font-medium text-sm">Principal pontuação</h2>
						<div className="flex flex-col gap-2 w-full">
							<p className='text-sm'>Probabilidade de recomendação</p>
							<ProgressBar percentage={100} />
						</div>
					</div>
					<div className="flex flex-col gap-4 ">
						<h2 className="text-xs">Princial motivo</h2>
						<MainReason selectedStep="Prestação de serviço" />
					</div>
					<div className="flex flex-col gap-4 mb-10">
						<h2 className="font-medium text-sm">Detalhes</h2>
						<div className="flex w-full gap-4">
							{/* coluna 1 */}
							<div className="w-full">
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
							{/* coluna 2 */}
							<div className="w-full">
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={70} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
							{/* coluna 3 */}
							<div className="w-full">
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-2 w-full">
									<p className='text-sm'>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
						</div>
					</div>
				</div>
		</BaseTemplate>
	)
}
