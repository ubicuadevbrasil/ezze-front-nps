import React, { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Pencil, Trash, Lock, MagnifyingGlass, User, UsersThree, Users, WarningCircle, CheckCircle, Plus } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import toast, { Toaster } from 'react-hot-toast'
import { AlertModal } from '@/components/ui/AlertModal'
import { Combobox } from '@/components/ui/Combobox'

export default function Index() {
	const invoices = [
		{
			grup: 'Catering',
		},
		// Adicione mais registros se necessário
	]

	const description = ['Global', 'Privado', 'Solicitado pelo cliente']

	const [isOpen, setIsOpen] = useState(false) // Estado que controla o modal
	const [formSubmitted, setFormSubmitted] = useState(false) // Estado que controla o envio do formulário

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
		<div className="flex flex-col min-h-screen bg-slate-300">
			<NavBar />
			<Toaster />
			<nav className="flex text-[#333946] bg-white h-20 items-center justify-between pl-8 pr-3">
				<div className="flex gap-3 font-medium text-lg items-center">
					<CheckCircle size={32} />
					<p>Tabulação</p>
				</div>
				<div className="flex gap-5">
					<div className="flex w-full max-w-sm items-center space-x-2 border rounded-lg border-[#b6afaf]">
						<Input type="search" placeholder="Pesquisa" className="border-none focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none" />
						<Button variant="ghost" type="submit">
							<MagnifyingGlass size={25} />
						</Button>
					</div>

					{/* Botão Novo agora abre o Dialog */}
					<Dialog open={isOpen} onOpenChange={setIsOpen}>
						<DialogTrigger asChild>
							<Button className="bg-[#365da5] text-lg flex gap-4">
								<Plus size={25} />
								<p className="px-5">Novo</p>
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Cadastro</DialogTitle>
								<Separator />
								<DialogDescription className="py-2 flex gap-2 text-slate-900">
									<Plus size={20} />
									Cadastrar status de atendimento
								</DialogDescription>
								<Separator />
							</DialogHeader>
							<ProfileForm onSubmit={handleFormSubmit} onCancel={() => setIsOpen(false)} /> {/* Passe o handler de cancelamento */}
						</DialogContent>
					</Dialog>
				</div>
			</nav>

			<main className="flex flex-col items-center gap-10 m-5  flex-grow">
				<div className="bg-white pb-3 w-full border rounded-2xl border-slate-400">
					<div className="bg-[#365da5] w-full rounded-t-2xl border-slate-400">
						<h1 className="p-4 text-white ">Status</h1>
					</div>
					<Table className="rounded-b-xl pb-3">
						<TableHeader>
							<TableRow className="bg-white">
								<TableHead>Gupo</TableHead>
								<TableHead>Descrição</TableHead>
								<TableHead>Submotivo</TableHead>
								<TableHead>Editar</TableHead>
								<TableHead>Deletar</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="rounded-b-xl bg-white rounded-2xl">
							{invoices.map((invoice) => (
								<TableRow key={invoice.grup}>
									<TableCell className="font-medium">{invoice.grup}</TableCell>
									<TableCell>
										<Combobox label="Motivo" options={description} />
									</TableCell>
									<TableCell>
										<Combobox label="Submotivo" options={description} />
									</TableCell>

									<TableCell>
										<Button variant="ghost">
											<Pencil size={32} />
										</Button>
									</TableCell>
									<TableCell>
										<AlertModal title="Aviso" description="Confirma a ação de deletar esse usuário?" onNo={() => console.log('Fechar modal aqui')}>
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

// Função que define o formulário de cadastro de perfil
function ProfileForm({ onSubmit, onCancel }: { onSubmit: () => void; onCancel: () => void }) {
	const handleSave = (event: React.FormEvent) => {
		event.preventDefault()
		onSubmit()
	}

	return (
		<form className="grid items-start gap-4" onSubmit={handleSave}>
			<div className="flex items-center gap-2">
				<WarningCircle size={20} />
				<Input type="text" id="grup" placeholder="Grupo" />
			</div>
			<div className="flex items-center gap-2">
				<WarningCircle size={20} />
				<Input type="text" id="description" placeholder="Descrição" />
			</div>
			<div className="flex items-center gap-2">
				<WarningCircle size={20} />
				<Input type="text" id="submotive" placeholder="Submotivo" />
			</div>

			<div className="w-full flex gap-4 justify-end">
				<Button variant="outline" type="button" onClick={onCancel}>
					{' '}
					{/* Fechar o modal no cancelar */}
					Cancelar
				</Button>
				<Button type="submit" className="bg-[#365da5]">
					Salvar
				</Button>
			</div>
		</form>
	)
}