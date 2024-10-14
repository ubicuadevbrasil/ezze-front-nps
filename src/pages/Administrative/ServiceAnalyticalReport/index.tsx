import React, { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { toast, Toaster } from 'react-hot-toast'
import { Combobox } from '@/components/ui/Combobox'
import Pagination from '@/components/ui/PaginationItem'
import { Archive } from 'lucide-react'
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CaretDown } from '@phosphor-icons/react'
import './scrollStiles.css'

interface ContactRecord {
	name: string
	protocol: string
	cellPhone: string
	originalCellPhone: string
	attendantName: string
	supervisorName: string
	time: string // Use a string in 'HH:mm' format
	date: string // Use a string in 'YYYY-MM-DD' format
	clientOrigin: string
	contactReason: string
	interaction: string
	situation: string
	mailing: string
	finalizer: string
	history: string
}


export default function Index() {
	const datas: ContactRecord[] = [
		{
			name: 'John Doe',
			protocol: 'ABC123',
			cellPhone: '12025550100',
			originalCellPhone: '5551234567',
			attendantName: 'Emily Davis',
			supervisorName: 'Alice Johnson',
			time: '14:30',
			date: '2024-10-01',
			clientOrigin: 'Website',
			contactReason: 'Inquiry about services',
			interaction: 'Positive',
			situation: 'Resolved',
			mailing: 'No',
			finalizer: 'John Smith',
			history: 'Client was satisfied with the provided solution.',
		},
		{
			name: 'Jane Smith',
			protocol: 'XYZ456',
			cellPhone: '12025550111',
			originalCellPhone: '5559876543',
			attendantName: 'David Kim',
			supervisorName: 'Bob Brown',
			time: '09:15',
			date: '2024-10-02',
			clientOrigin: 'Phone Call',
			contactReason: 'Technical support',
			interaction: 'Neutral',
			situation: 'Pending',
			mailing: 'Yes',
			finalizer: 'Sarah Lee',
			history: 'Client is awaiting further assistance.',
		},
		{
			name: 'Carlos Rodriguez',
			protocol: 'LMN789',
			cellPhone: '12025550122',
			originalCellPhone: '5555678901',
			attendantName: 'Anna Carter',
			supervisorName: 'Carol White',
			time: '16:45',
			date: '2024-10-03',
			clientOrigin: 'Email',
			contactReason: 'Billing issue',
			interaction: 'Negative',
			situation: 'Escalated',
			mailing: 'No',
			finalizer: 'Emily Davis',
			history: 'Client was upset about incorrect billing.',
		},
	]




	const [isOpenIlhas, setIsOpenIlhas] = useState(false)
	const [IlhasData, setIlhasData] = useState<Array<{ label: string; value: string }>>()
	const [IlhasValue, setIlhasValue] = useState<{label:string, value:string}>()

	const [isOpenTab, setIsOpenTab] = useState(false)
	const [TabData, setTabData] = useState<Array<{ label: string; value: string }>>()
	const [TabValue, setTabValue] = useState<{label:string, value:string}>()

	const [isOpenInteraction, setIsOpenInteraction] = useState(false)
	const [InteractionData, setInteractionData] = useState<Array<{ label: string; value: string }>>()
	const [InteractionValue, setInteractionValue] = useState<{label:string, value:string}>()

	const [isOpenSituation, setIsOpenSituation] = useState(false)
	const [SituationData, setSituationData] = useState<Array<{ label: string; value: string }>>()
	const [SituationValue, setSituationValue] = useState<{label:string, value:string}>()

	const [isOpenHistory, setIsOpenHistory] = useState(false)
	const [isOpenTransfer, setIsOpenTransfer] = useState(false)

	const [formSubmitted, setFormSubmitted] = useState(false)
	const [IdAssistencia, setIdAssistencia] = useState<string>('')
	const [NomeCliente, setNomeCliente] = useState<string>('')
	const [Telefone, setTelefone] = useState<string>('')

	const formatPhoneNumber = (phoneNumber: string) => {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
		return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber
	}

	// Função para formatar a data no formato dd/mm/yyyy
	const formatDate = (date: string) => {
		const d = new Date(date)
		return d.toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
	}

	useEffect(() => {
		if (formSubmitted) {
			toast.success('Formulário enviado com sucesso!')
			setFormSubmitted(false)
		}
	}, [formSubmitted])

	const handleFormSubmit = () => {
		setFormSubmitted(true)
	}

	return (
		<div className="flex flex-col min-h-screen bg-[#f1f3fe]">
			<NavBar />
			<Toaster />
			<nav className="flex text-[#333946] bg-white h-20 items-center pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<Archive size={32} />
					<p>Relatório analítico de atendimento</p>
				</div>
			</nav>
			<div className="flex justify-between">
				<div className="grid grid-cols-1 custom-scrollbar sm:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-2 items-center">
					<DatePickerWithRange className="border-slate-400" />
					<div className="flex flex-col text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
						<label htmlFor="assignment" className="">
							Id da assistencia
						</label>
						<input id="assignment" className="w-full outline-none" placeholder="---" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
					</div>
					<Popover open={isOpenIlhas} onOpenChange={setIsOpenIlhas}>
						<PopoverTrigger asChild className="border border-slate-400">
							<div className="flex h-10 items-center px-3 border border-slate-400 rounded-md bg-white">
								<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
									<span className="text-[10px] leading-3">Ilhas</span>
									<div className="text-[#a8b1c2]">{IlhasValue ? IlhasData.find((status) => status.value === IlhasValue)?.label : 'Selecionar'}</div>
								</div>
								<CaretDown size={24} />
							</div>
							{/* <Button variant="outline" role="combobox" className=" justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0 border border-slate-400 flex gap-5 flex-col p-3"></PopoverContent>
					</Popover>

					<Popover open={isOpenTab} onOpenChange={setIsOpenTab}>
						<PopoverTrigger asChild className="border border-slate-400">
							<div className="flex h-10 items-center px-3 border border-slate-400 rounded-md bg-white">
								<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
									<span className="text-[10px] leading-3">Tabulação</span>
									<div className="text-[#a8b1c2]">{TabValue ? TabData.find((status) => status.value === TabValue)?.label : 'Selecionar'}</div>
								</div>
								<CaretDown size={24} />
							</div>
							{/* <Button variant="outline" role="combobox" className=" justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0 border border-slate-400 flex gap-5 flex-col p-3"></PopoverContent>
					</Popover>
					<div className="flex flex-col text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
						<label htmlFor="assignment" className="">
							Nome do Cliente
						</label>
						<input id="assignment" className="w-full outline-none" placeholder="---" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
					</div>
					<div className="flex flex-col text-[10px] leading-3 h-10 justify-center px-3 border border-slate-400 rounded-md bg-white">
						<label htmlFor="assignment" className="">
							Telefone
						</label>
						<input id="assignment" className="w-full outline-none" placeholder="---" value={Telefone} onChange={(e) => setTelefone(e.target.value)} />
					</div>

					<Popover open={isOpenInteraction} onOpenChange={setIsOpenInteraction}>
						<PopoverTrigger asChild className="border border-slate-400">
							<div className="flex h-10 items-center px-3 border border-slate-400 rounded-md bg-white">
								<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
									<span className="text-[10px] leading-3">Interação</span>
									<div className="text-[#a8b1c2]">{InteractionValue ? InteractionData.find((status) => status.value === InteractionValue)?.label : 'Selecionarf'}</div>
								</div>
								<CaretDown size={24} />
							</div>
							{/* <Button variant="outline" role="combobox" className=" justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0 border border-slate-400 flex gap-5 flex-col p-3"></PopoverContent>
					</Popover>

					<Popover open={isOpenSituation} onOpenChange={setIsOpenSituation}>
						<PopoverTrigger asChild className="border border-slate-400">
							<div className="flex h-10 items-center px-3 border border-slate-400 rounded-md bg-white">
								<div className="flex flex-col w-full text-[10px] leading-3  justify-center ">
									<span className="text-[10px] leading-3">Situação</span>
									<div className="text-[#a8b1c2]">{SituationValue ? SituationData.find((status) => status.value === SituationValue)?.label : 'Selecionar'}</div>
								</div>
								<CaretDown size={24} />
							</div>
							{/* <Button variant="outline" role="combobox" className=" justify-between text-gray-500 font-normal">
							{statusValue ? statusList.find((status) => status.value === statusValue)?.label : 'Status'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button> */}
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0 border border-slate-400 flex gap-5 flex-col p-3"></PopoverContent>
					</Popover>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-5 py-2 items-center text-2xl">
					<Button className="bg-[#d9dde5] text-lg py-2 px-3 border border-[#c0c7d4] text-[#333946] font-bold">Bloqueios</Button>
					<Button className="bg-[#d9dde5] text-lg py-2 px-3 border border-[#c0c7d4] text-[#333946] font-bold">Logins</Button>
					<Button className="py-2 px-3 text-lg bg-[#00852c]">Exportar</Button>
					<Button className="py-2 px-3 text-lg bg-[#203863]">Buscar</Button>
				</div>
			</div>

			<main className="flex flex-col items-center gap-10 m-5 flex-grow">
				<div className="w-full">
					<div className="bg-white pb-6 w-full border rounded-3xl border-slate-400">
						<div className="bg-[#365da5] w-full rounded-t-2xl border-slate-400">
							<h1 className="p-4 text-white">Resultados</h1>
						</div>
						{!!datas ? (
							<div className="custom-scrollbar overflow-x-auto">
								{' '}
								{/* Scroll horizontal com estilo */}
								<Table className="rounded-b-xl pb-3 min-w-max">
									<TableHeader>
										<TableRow className="bg-white">
											<TableHead className="whitespace-nowrap">Nome</TableHead>
											<TableHead className="whitespace-nowrap">Protocolo</TableHead>
											<TableHead className="whitespace-nowrap">Celular</TableHead>
											<TableHead className="whitespace-nowrap">Celular (Original)</TableHead>
											<TableHead className="whitespace-nowrap">Nome do atendente</TableHead>
											<TableHead className="whitespace-nowrap">Supervisor do atendente</TableHead>
											<TableHead className="whitespace-nowrap">Hora</TableHead>
											<TableHead className="whitespace-nowrap">Data</TableHead>
											<TableHead className="whitespace-nowrap">Origem cliente</TableHead>
											<TableHead className="whitespace-nowrap">Motivo do contato</TableHead>
											<TableHead className="whitespace-nowrap">Interação</TableHead>
											<TableHead className="whitespace-nowrap">Situação</TableHead>
											<TableHead className="whitespace-nowrap">Mailing</TableHead>
											<TableHead className="whitespace-nowrap">Finalizador</TableHead>
											<TableHead className="whitespace-nowrap">Histórico</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody className="rounded-b-xl bg-white rounded-2xl">
										{datas.map((data) => (
											<TableRow key={data.protocol}>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.name}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.protocol}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{formatPhoneNumber(data.cellPhone)}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{formatPhoneNumber(data.originalCellPhone)}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.attendantName}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.supervisorName}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.time}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{formatDate(data.date)}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.clientOrigin}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.contactReason}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.interaction}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.situation}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.mailing}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">{data.finalizer}</TableCell>
												<TableCell className="font-medium text-slate-700 whitespace-nowrap">
													<Button className="p-2 bg-[#203863]">Histórico</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</div>
						) : (
							<></>
						)}
					</div>

					<div className="flex justify-around items-center p-4">
						<div className="text-sm text-gray-600 ">Total de alertas: {9}</div>
						<Pagination />
					</div>
				</div>
			</main>
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] mt-auto text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}

interface FormProps {
	onSubmit: () => void
	onCancel: () => void
}

function ClosureForm({ onSubmit, onCancel }: FormProps) {
	const description = ['Global', 'Privado', 'Solicitado pelo cliente']

	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<Combobox label="Grupo" options={[]} />
			<Combobox label="Motivo" options={description} />
			<Combobox label="Submotivo" options={[]} />
			<Input type="text" placeholder="" />

			<div className="w-full flex gap-4 justify-end">
				<Button variant="outline" type="button" onClick={onCancel}>
					Cancelar
				</Button>
				<Button type="submit" className="bg-[#d92d1f]">
					Encerrar
				</Button>
			</div>
		</form>
	)
}

function TransferForm({ onSubmit, onCancel }: FormProps) {
	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<Combobox label="Selecione um operador" options={[]} />
			<div className="w-full flex gap-4 justify-end">
				<Button variant="outline" type="button" onClick={onCancel}>
					Cancelar
				</Button>
				<Button type="submit" className="bg-[#365da5]">
					Transferir
				</Button>
			</div>
		</form>
	)
}
