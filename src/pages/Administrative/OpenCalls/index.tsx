import React, { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Clipboard, Printer } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { toast, Toaster } from 'react-hot-toast'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Combobox } from '@/components/ui/Combobox'
import Pagination from '@/components/ui/PaginationItem'
import { Input } from '@/components/ui/input'

interface AttendanceData {
	clientName: string
	clientNumber: string
	dateOfService: number
	supervisorName: string
	operatorName: string
	protocol: string
}

export default function Index() {
	const datas: AttendanceData[] = [
		{
			clientName: 'Annette Black',
			clientNumber: '11999999999',
			dateOfService: Date.now(),
			supervisorName: 'Annette Black',
			operatorName: 'Annette Black',
			protocol: '18-9999',
		},
		// Add more records if needed
	]

	const [isOpenClosure, setIsOpenClosure] = useState(false)
	const [isOpenHistory, setIsOpenHistory] = useState(false)
	const [isOpenTransfer, setIsOpenTransfer] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState(false)

	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 7 // Exibir no máximo 7 itens por página

	// Calcula o número total de páginas
	const totalPages = Math.max(1, Math.ceil(datas.length / itemsPerPage))

	const formatPhoneNumber = (phoneNumber:string) => {
		const match = phoneNumber.match(/^(\d{2})(\d{5})(\d{4})$/)
		return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber
	}

	// Função para formatar a data no formato dd/mm/yyyy
	const formatDate = (date:number) => {
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
		<div className="flex flex-col min-h-screen bg-white">
			<NavBar />
			<Toaster />
			<nav className="flex text-[#333946] bg-white h-20 items-center pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<Clipboard size={32} />
					<p>Atendimentos em aberto</p>
				</div>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5 flex-grow">
				<div>
					<div className="bg-white pb-4 w-full border rounded-3xl border-slate-400">
						<div className="bg-[#203863] w-full rounded-t-2xl border-slate-400">
							<h1 className="p-4 text-white">Atendimentos</h1>
						</div>
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
													<Button className="bg-[#d92d1f] p-1">Encerrar</Button>
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
													<Button className="bg-[#365da5] p-1">Histórico</Button>
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
													<Button className="bg-[#00852c] p-1">Transferir</Button>
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
					</div>
					<div className="flex justify-around items-center p-4">
						<div className="text-sm text-gray-600 ">Total de alertas: {9}</div>
						<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
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

	const [selectedGroup, setSelectedGroup] = React.useState<string | null>(null)
	const [selectedReason, setSelectedReason] = React.useState<string | null>(null)
	const [selectedSubReason, setSelectedSubReason] = React.useState<string | null>(null)

	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<Combobox label="Grupo" options={[]} selected={selectedGroup} onSelected={setSelectedGroup} />
			<Combobox label="Motivo" options={description} selected={selectedReason} onSelected={setSelectedReason} />
			<Combobox label="Submotivo" options={[]} selected={selectedSubReason} onSelected={setSelectedSubReason} />
			<Input type="text" placeholder="" />

			<div className="w-full flex gap-4 justify-end">
				<Button className="p-2" variant="outline" type="button" onClick={onCancel}>
					Cancelar
				</Button>
				<Button type="submit" className="bg-[#d92d1f] p-2">
					Encerrar
				</Button>
			</div>
		</form>
	)
}

function TransferForm({ onSubmit, onCancel }: FormProps) {
	const [selectedOperator, setSelectedOperator] = React.useState<string | null>(null)

	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<Combobox label="Selecione um operador" options={[]} selected={selectedOperator} onSelected={setSelectedOperator} />
			<div className="w-full flex gap-4 justify-end">
				<Button className="p-2" variant="outline" type="button" onClick={onCancel}>
					Cancelar
				</Button>
				<Button type="submit" className="bg-[#365da5] p-2">
					Transferir
				</Button>
			</div>
		</form>
	)
}
