import React, { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pencil, Trash, Lock, MagnifyingGlass, User, UsersThree, Users, WarningCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import toast, { Toaster } from 'react-hot-toast'
import { AlertModal } from '@/components/ui/AlertModal'
import { Combobox } from '@/components/ui/Combobox'

interface Item {
	label: string
	value: string
}

export default function Index() {
	const invoices = [
		{
			invoice: '#001',
			name: 'John Doe',
			login: 'johndoe',
			profile: 'Admin',
			supervisor: 'Jane Smith',
			password: '********',
		},
	]

	const [isOpen, setIsOpen] = useState(false) // Estado que controla o modal
	const [formSubmitted, setFormSubmitted] = useState(false) // Estado que controla o envio do formulário
	const [UserType, setUserType] = useState<Item>({ label: '', value: '' })

	// Efeito que dispara o toast após o modal ser fechado e o formulário ser submetido
	useEffect(() => {
		if (!isOpen && formSubmitted) {
			toast.success('Formulário enviado com sucesso!')
			setFormSubmitted(false) // Reseta o estado após exibir o toast
		}
	}, [isOpen, formSubmitted])

	const handleFormSubmit = () => {
		setFormSubmitted(true) // Marca que o formulário foi submetido
		setIsOpen(false) // Fecha o modal
	}

	return (
		<div className="flex flex-col min-h-screen bg-[#F1F3FE]">
			<NavBar />
			<Toaster />
			<nav className="flex text-[#333946] bg-white h-20 items-center justify-between pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<UsersThree size={32} />
					<p>Atendentes</p>
				</div>
				<div className="flex gap-5">
					<div className="flex w-full  max-w-sm items-center space-x-2 border-2 rounded-md -lg border-[#b6afaf]">
						<Input type="search" placeholder="Pesquisa" className="border-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none" />
						<Button variant="ghost" type="submit">
							<MagnifyingGlass size={25} />
						</Button>
					</div>

					{/* Botão Novo agora abre o Dialog */}
					<Dialog open={isOpen} onOpenChange={setIsOpen}>
						<DialogTrigger asChild>
							<Button className="bg-[#365da5] px-5 text-lg flex gap-4">
								<User size={25} />
								<p className="px-5">Novo</p>
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Atendentes</DialogTitle>
								<DialogDescription className="py-2 flex gap-2 text-slate-900">
									<Users size={20} weight="fill" />
									Cadastrar novo usuário
								</DialogDescription>
								<ToggleButtons onSelect={setUserType} selected={UserType ?? { label: '', value: '' }} />

								<Separator className="bg-black " />
							</DialogHeader>
							<ProfileForm onSubmit={handleFormSubmit} />
						</DialogContent>
					</Dialog>
				</div>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5 flex-grow">
				<div className="bg-white pb-4 w-full border rounded-md border-slate-400">
					<div className="bg-[#365da5] w-full rounded-t-md border-slate-400">
						<h1 className="p-4 text-white ">Atendentes online</h1>
					</div>
					<Table className="rounded-b-md pb-3">
						<TableHeader>
							<TableRow className="bg-white">
								<TableHead>#</TableHead>
								<TableHead>Nome do usuário</TableHead>
								<TableHead>Login</TableHead>
								<TableHead>Perfil</TableHead>
								<TableHead>Supervisor</TableHead>
								<TableHead>Senha</TableHead>
								<TableHead>Editar</TableHead>
								<TableHead>Deletar</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="rounded-md -b-xl bg-white rounded-md -2xl">
							{invoices.map((invoice) => (
								<TableRow key={invoice.invoice}>
									<TableCell className="font-medium">{invoice.invoice}</TableCell>
									<TableCell>{invoice.name}</TableCell>
									<TableCell>{invoice.login}</TableCell>
									<TableCell>{invoice.profile}</TableCell>
									<TableCell>{invoice.supervisor}</TableCell>
									<TableCell>
										<Button variant="ghost">
											<Lock size={32} />
										</Button>
									</TableCell>
									<TableCell>
										<Button variant="ghost">
											<Pencil size={32} />
										</Button>
									</TableCell>
									<TableCell>
										<AlertModal title="Aviso" description="Confirma a ação de deletar esse usuário?" onConfirm={() => console.log('Confirmed')} onCancel={() => console.log('Cancelled')}>
											<Button variant="ghost">
												<Trash size={32} />
											</Button>
										</AlertModal>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</main>
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] mt-auto text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}

function ProfileForm({ onSubmit }: { onSubmit: () => void }) {
	const jobOptions = ['Administrador', 'Supervisor', 'Operador', 'Gerente', 'Coordenador']

	const [JobSelected, setJobSelected] = useState<string|null>(null)

	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<div className="flex items-center gap-2">
				<WarningCircle size={20} />
				<Input type="text" id="username" placeholder="Nome de Usuário" />
			</div>
			<div className="flex items-center gap-2">
				<User size={20} />
				<Input type="email" id="email" placeholder="Login" />
			</div>
			<div className="flex items-center gap-2">
				<User size={20} />
				<Combobox options={jobOptions} label="Cargo" onSelected={setJobSelected} selected={JobSelected} />
			</div>
			<div className="flex items-center gap-2">
				<Lock size={20} />
				<Input type="text" id="password" placeholder="Senha" />
			</div>
			<div className="flex items-center gap-2">
				<Lock size={20} />
				<Input type="text" id="confirmpassword" placeholder="Confirmar senha" />
			</div>
			<div className="w-full flex gap-4 justify-end">
				<Button className="p-2" variant="outline">
					Cancelar
				</Button>
				<Button className="p-2" type="submit">
					Salvar
				</Button>
			</div>
		</form>
	)
}

interface ToggleButtonsProps {
	onSelect: (selected: Item) => void
	selected: Item
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ onSelect, selected }) => {
	const [selectedItem, setSelectedItem] = useState<Item>(selected)

	const handleClick = (button: Item) => {
		setSelectedItem(button)
		onSelect(button)
	}

	return (
		<div className="flex gap-4">
			<Button className="p-2" variant={selectedItem?.value === 'supervisor' ? 'default' : 'secondary'} onClick={() => handleClick({ label: 'Supervisor', value: 'supervisor' })}>
				Supervisor
			</Button>
			<Button className="p-2" variant={selectedItem?.value === 'atendente' ? 'default' : 'secondary'} onClick={() => handleClick({ label: 'Atendente', value: 'atendente' })}>
				Atendente
			</Button>
		</div>
	)
}


