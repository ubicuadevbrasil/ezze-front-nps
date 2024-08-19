import { useEffect, useState } from 'react'
import { IPedingSearch } from '../PendingSearch/columns'
import { useLocation } from 'react-router-dom'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import NavBar from '@/components/ui/NavBar'
import { Button } from '@/components/ui/button'
import ConfirmationModal from '@/components/ui/ConfirmationModal'
import { ICloseTheLoop } from '../CloseTheLoop/columns'

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
		<div className="w-screen h-screen flex flex-col">
			<ConfirmationModal isVisible={isModalVisible} onConfirm={handleConfirm} onCancel={handleCancel} message="Você deseja tabular uma tentativa de contato?" />
			<NavBar />

			<div className="px-5 w-full h-16 gap-5 flex flex-row items-center justify-between">
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

			<div className="px-10 flex flex-row w-screen justify-around">
				<div className="w-3/12 ">
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
				</div>
				<div className="w-7/12">
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
				</div>
			</div>
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] absolute bottom-0 text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}
