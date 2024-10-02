import React, { useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pencil, Trash, Lock, MagnifyingGlass, User, UsersThree, Users, WarningCircle, Check } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ChevronsUpDown, Command } from 'lucide-react'
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'


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
		// Adicione mais registros se necessário
	]

	return (
		<div className="flex flex-col min-h-screen bg-slate-300">
			<NavBar />
			<nav className="flex text-[#333946] bg-white h-20 items-center justify-between pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<UsersThree size={32} />
					<p>Atendentes</p>
				</div>
				<div className="flex gap-5">
					<div className="flex w-full max-w-sm items-center space-x-2 border-2 rounded-lg border-[#b6afaf]">
						<Input type="search" placeholder="Pesquisa" className="border-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none" style={{ border: 'none', outline: 'none', boxShadow: 'none' }} />
						<Button variant="ghost" type="submit">
							<MagnifyingGlass size={25} />
						</Button>
					</div>

					{/* Botão Novo agora abre o Dialog */}
					<Dialog>
						<DialogTrigger asChild>
							<Button className="bg-[#365da5] text-lg flex gap-4">
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
								<ToggleButtons onSelect={null} />

								<Separator className='bg-black '/>
							</DialogHeader>
							<ProfileForm />
						</DialogContent>
					</Dialog>
				</div>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5 py-10 flex-grow">
				<table className="bg-[#203863] rounded-t-xl w-full">
					<h1 className="p-4 text-white ">Atendentes online</h1>
					<Table className="rounded-b-xl">
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
						<TableBody className="rounded-b-xl bg-white">
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
										<Button variant="ghost">
											<Trash size={32} />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</table>
			</main>
			<footer className="flex w-full justify-center py-2 bg-[#D9DDE5] mt-auto text-[10px]">{new Date().getFullYear()} - Powered by Ubicua ©</footer>
		</div>
	)
}

function ProfileForm({ className }: React.ComponentProps<'form'>) {
	const jobOptions = ['Administrador', 'Supervisor', 'Operador', 'Gerente', 'Coordenador']
	return (
		<form className={cn('grid items-start gap-4 ', className)}>
			<div className="flex items-center gap-2">
				<WarningCircle size={20} />
				<Input type="text" id="username" className="border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Nome de Usuário" style={{ outline: 'none', boxShadow: 'none' }} />
			</div>
			<div className="flex items-center gap-2">
				<User size={20} />
				<Input type="email" id="email" className="border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Login" style={{ outline: 'none', boxShadow: 'none' }} />
			</div>
			<div className="flex items-center gap-2">
				<User size={20} />
				<Combobox options={jobOptions} label="Cargo" />
			</div>
			<div className="flex items-center gap-2">
				<Lock size={20} />
				<Input type="text" id="password" className="border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Senha" style={{ outline: 'none', boxShadow: 'none' }} />
			</div>
			<div className="flex items-center gap-2">
				<Lock size={20} />
				<Input type="text" id="confirmpassword" className="border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Confirmar senha" style={{ outline: 'none', boxShadow: 'none' }} />
			</div>
			<div className="w-full flex gap-4 justify-end ">
				<Button type="reset" variant={'outline'}>
					Cancelar
				</Button>
				<Button type="submit">Salvar</Button>
			</div>
		</form>
	)
}

interface ToggleButtonsProps {
	onSelect: (selected: string) => void
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ onSelect }) => {
	const [selected, setSelected] = useState<'supervisor' | 'atendente' | null>(null)

	const handleClick = (button: 'supervisor' | 'atendente') => {
		setSelected(button)
		onSelect(button)
	}

	return (
		<div className="flex gap-4">
			<Button variant={selected === 'supervisor' ? '' : 'secondary'} onClick={() => handleClick('supervisor')}>
				Supervisor
			</Button>

			<Button variant={selected === 'atendente' ? '' : 'secondary'} onClick={() => handleClick('atendente')}>
				Atendente
			</Button>
		</div>
	)
}

interface ComboboxProps {
	options: string[]
	label: string
}

const Combobox: React.FC<ComboboxProps> = ({ options, label }) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value)
	}

	return (
		<>
			<select id="combobox" style={{ outline: 'none', boxShadow: 'none' }} value={selectedOption || ''} onChange={handleSelect} className="block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200">
				<option value="" disabled>z
					Selecione um cargo
				</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	)
}
