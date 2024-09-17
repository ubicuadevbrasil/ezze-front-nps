import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import NavBar from '@/components/ui/NavBar'
import { Button } from '@/components/ui/button'
import ConfirmationModal from '@/components/ui/ConfirmationModal'
import { ICloseTheLoop } from '../CloseTheLoop/columns'
import ProgressBar from '@/components/ui/ProgressBar'
import { Bell } from '@phosphor-icons/react'
import MainReason from '@/components/ui/MainReason'

export default function index() {
	const location = useLocation()
	const [isModalVisible, setModalVisible] = useState(false)

	const handleConfirm = () => {
		console.log('Confirmed!')
		setModalVisible(false)
	}

	const handleCancel = () => {
		console.log('Cancelled!')
		setModalVisible(false)
	}
	const clientData: ICloseTheLoop = location.state

	return (
		<div>
			<ConfirmationModal isVisible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel} message="Você deseja tabular uma tentativa de contato?" />
			<NavBar />
			<main className=" flex flex-col gap-10 px-16">
				<div className="pt-4 gap-5 flex flex-row items-center justify-between">
					<div className="flex flex-row gap-5 items-center">
						<Button className="text-lg bg-[#104b94]">Voltar</Button>
						<h1 className="text-2xl font-normal">Alfredo</h1>
					</div>
					<div className="gap-3 flex">
						<Button className=" border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Responder Pesquisa
						</Button>
						<Button className=" border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Tabular tentativa de contato
						</Button>
						<Button className=" border border-[#104b94] text-[#104b94]" variant={'outline'}>
							Voltar
						</Button>
					</div>
				</div>

				<div className=" flex flex-row justify-between">
					<div>
						<h1 className="font-bold">Informações sobre o cliente</h1>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">Nome cliente</TableCell>
									<TableCell>Alfredo</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Email do Cliente</TableCell>
									<TableCell>-</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Gênero</TableCell>
									<TableCell>-</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Telefone do Cliente</TableCell>
									<TableCell>11947571208</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Data de Nascimento</TableCell>
									<TableCell>-</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Estado do Cliente</TableCell>
									<TableCell>São Paulo</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Cidade do Cliente</TableCell>
									<TableCell>São Paulo</TableCell>
								</TableRow>
								<TableRow>
									<TableCell className="font-medium">Endereço</TableCell>
									<TableCell>-</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<h2 className="text-slate-900 mt-10 font-medium text-md">Atividades</h2>
						<div className="flex items-center gap-4 mt-3">
							<div className="bg-[#104b94] rounded-full p-2 w-fit">
								<Bell size={30} color="white" />
							</div>
							<div>
								<h2 className="text-slate-600 font-medium text-md">Alerta criado</h2>
								<p className="text-gray-500 text-sm">22/07/2024, 09:30:20 - Sistema</p>
							</div>
						</div>
					</div>
					<div>
						<h1 className="font-bold">Informações sobre a transação</h1>
						<div className=" flex flex-row">
							<Table>
								<TableBody>
									<TableRow>
										<TableCell className="font-medium">Número da assistência</TableCell>
										<TableCell>124536598</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Data de Abertura do Arquivo</TableCell>
										<TableCell>21/07/2024</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Tipo de Assistência</TableCell>
										<TableCell>EMERGENCIA</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Garantira</TableCell>
										<TableCell>ELETRICISTA</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Risco</TableCell>
										<TableCell>CONSTRUÇÃO E INSTALAÇÕES</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Número do contrato</TableCell>
										<TableCell>40000044089</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Centro Tramitador</TableCell>
										<TableCell>TAMBORE</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Tipo de Serviço</TableCell>
										<TableCell>ELETRICISTA</TableCell>
									</TableRow>
								</TableBody>
							</Table>

							<Table>
								<TableBody>
									<TableRow>
										<TableCell className="font-medium">Código do serviço</TableCell>
										<TableCell>4000</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Endereço dos serviços</TableCell>
										<TableCell>GUARULHOS, SÃO PAULO, SUDESTE</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Data do serviço</TableCell>
										<TableCell>21/07/2024</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Tipo de prestador</TableCell>
										<TableCell>CONSTRUÇÃO MANUTENÇÃO CIVIL</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Nome do prestador</TableCell>
										<TableCell>EMBAJADOR RESOLVE - HOME SERVICE</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Estado do prestador</TableCell>
										<TableCell>São Paulo</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Cidade do prestador</TableCell>
										<TableCell>GUARULHOS</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">Canal de resposta</TableCell>
										<TableCell>SMS</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</div>

						<h2 className="text-slate-900 mt-10 font-medium text-md">Feedback</h2>
						<div className="flex items-center gap-4 mt-3">
							<div className="bg-[#104b94] rounded-full p-2 w-fit">
								<Bell size={30} color="white" />
							</div>
							<div>
								<h2 className="text-slate-600 font-medium text-md">Comentário(recebidos pela Resolve)</h2>
								<p className="text-gray-500 text-sm">
									A última atendente foi perfeita, mas passei por 5 antes, ningéum sabia me orientar, me passaram vários números! Eu gostaria de pedir para que o prestador voltasse em minha residência, ele esqueceu duas tesouras que vão fazer falta para ele!!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-4">
						<h2 className="font-semibold">Pincipal pontuação</h2>
						<div className="flex flex-col gap-3 w-3/12">
							<p>Probabilidade de recomendação</p>
							<ProgressBar percentage={100} />
						</div>
					</div>
					<div className="flex flex-col gap-4 ">
						<h2 className="font-semibold">Motivo principal</h2>
						<MainReason selectedStep="Prestação de serviço" />
					</div>
					<div className="flex flex-col gap-4 mb-10">
						<h2 className="font-semibold">Detalhes</h2>
						<div className="flex w-full">
							{/* coluna 1 */}
							<div className="w-full">
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
							{/* coluna 2 */}
							<div className="w-full">
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={70} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
							{/* coluna 3 */}
							<div className="w-full">
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
								<div className="flex flex-col gap-3 w-9/12">
									<p>Probabilidade de recomendação</p>
									<ProgressBar percentage={100} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="flex mt-5 w-full justify-center py-2 bg-[#D9DDE5] bottom-0 text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}
