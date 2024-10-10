import React, { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Clipboard, Printer } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast, Toaster } from 'react-hot-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Combobox } from '@/components/ui/Combobox'
import Pagination from '@/components/ui/PaginationItem'
import { Archive } from 'lucide-react'
import { DatePickerWithRange } from '@/components/ui/DatePickerWithRange'

interface AttendanceData {
	clientName: string
	clientNumber: string
	dateOfService: number
	supervisorName: string
	operatorName: string
	protocol: string
}

export default function Index() {
	const datas: AttendanceData[] = null

	const [isOpenClosure, setIsOpenClosure] = useState(false)
	const [isOpenHistory, setIsOpenHistory] = useState(false)
	const [isOpenTransfer, setIsOpenTransfer] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState(false)
	const [IdAssistencia, setIdAssistencia] = useState<string>('')
	const [NomeCliente, setNomeCliente] = useState<string>('')
	const [CiaCliente, setCiaCliente] = useState<string>('')

	const formatPhoneNumber = (phoneNumber: string) => {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
		return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber
	}

	// Função para formatar a data no formato dd/mm/yyyy
	const formatDate = (date: number) => {
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
		<div className="flex flex-col min-h-screen bg-slate-300">
			<NavBar />
			<Toaster />
			<nav className="flex text-[#333946] bg-white h-20 items-center pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<Archive size={32} />
					<p>Relatório analítico de atendimento</p>
				</div>
			</nav>
			<div className="px-5 w-full py-2 gap-5 flex flex-row items-center justify-end">
				<DatePickerWithRange className="border-slate-400" />
				<Input className="border-slate-400" placeholder="Id da assistencia" value={IdAssistencia} onChange={(e) => setIdAssistencia(e.target.value)} />
				<Input className="border-slate-400" placeholder="Nome do cliente" value={NomeCliente} onChange={(e) => setNomeCliente(e.target.value)} />
				<Input className="border-slate-400" placeholder="CIA Cliente" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
				<Input className="border-slate-400" placeholder="CIA Cliente" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
				<Input className="border-slate-400" placeholder="CIA Cliente" value={CiaCliente} onChange={(e) => setCiaCliente(e.target.value)} />
				<Button className="text-lg bg-[#104b94]">Buscar</Button>
			</div>

			<main className="flex flex-col items-center gap-10 m-5 flex-grow">
				<div className='w-full'>
					<div className="bg-white pb-3 w-full border rounded-2xl border-slate-400">
						<div className="bg-[#365da5] w-full rounded-t-2xl border-slate-400">
							<h1 className="p-4 text-white">Resultados</h1>
						</div>
						{!!datas ? (
							<Table className="rounded-b-xl pb-3">
								<TableHeader>
									<TableRow className="bg-white">
										<TableHead>Nome Cliente</TableHead>
										<TableHead>Número Cliente</TableHead>
										<TableHead>Data de atendimento</TableHead>
										<TableHead>Nome Operador</TableHead>
										<TableHead>Supervisor</TableHead>
										<TableHead>Protocolo</TableHead>
										<TableHead>Encerrar</TableHead>
										<TableHead>Histórico</TableHead>
										<TableHead>Transferir</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody className="rounded-b-xl bg-white rounded-2xl">
									{datas.map((data) => (
										<TableRow key={data.protocol}>
											<TableCell className="font-medium text-slate-700">{data.clientName}</TableCell>
											<TableCell className="font-medium text-slate-700">{formatPhoneNumber(data.clientNumber)}</TableCell>
											<TableCell className="font-medium text-slate-700">{formatDate(data.dateOfService)}</TableCell>
											<TableCell className="font-medium text-slate-700">{data.operatorName}</TableCell>
											<TableCell className="font-medium text-slate-700">{data.supervisorName}</TableCell>
											<TableCell className="font-medium text-slate-700">{data.protocol}</TableCell>
											<TableCell>
												<Dialog open={isOpenClosure} onOpenChange={setIsOpenClosure}>
													<DialogTrigger asChild>
														<Button className="bg-[#d92d1f]">Encerrar</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Encerrar atendimento</DialogTitle>
															<Separator />
															<DialogDescription className="py-2 flex gap-2 text-slate-900">Cadastrar status de atendimento</DialogDescription>
															<Separator />
														</DialogHeader>
														<ClosureForm onSubmit={handleFormSubmit} onCancel={() => setIsOpenClosure(false)} />
													</DialogContent>
												</Dialog>
											</TableCell>
											<TableCell>
												<Dialog open={isOpenHistory} onOpenChange={setIsOpenHistory}>
													<DialogTrigger asChild>
														<Button className="bg-[#365da5]">Histórico</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<div className="flex justify-start items-center gap-2">
																<DialogTitle>Histórico de interação</DialogTitle>
																<Printer size={25} className="border border-slate-400 p-1 rounded-lg" />
															</div>
															<Separator />
														</DialogHeader>
													</DialogContent>
												</Dialog>
											</TableCell>
											<TableCell>
												<Dialog open={isOpenTransfer} onOpenChange={setIsOpenTransfer}>
													<DialogTrigger asChild>
														<Button className="bg-[#00852c]">Transferir</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Transferir Cliente</DialogTitle>
															<Separator />
														</DialogHeader>
														<TransferForm onSubmit={handleFormSubmit} onCancel={() => setIsOpenTransfer(false)} />
													</DialogContent>
												</Dialog>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
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
